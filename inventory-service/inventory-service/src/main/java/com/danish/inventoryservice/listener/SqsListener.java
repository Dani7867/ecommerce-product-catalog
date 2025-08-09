package com.danish.inventoryservice.listener;

import com.danish.inventoryservice.service.InventoryService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import software.amazon.awssdk.services.sqs.SqsClient;

@Component
public class SqsListener {

    private final InventoryService inventoryService;
    private final SqsClient sqsClient;
    private final ObjectMapper objectMapper;

    public SqsListener(InventoryService inventoryService, SqsClient sqsClient) {
        this.inventoryService = inventoryService;
        this.sqsClient = sqsClient;
        this.objectMapper = new ObjectMapper();
        // In a real application, you would start a background thread
        // to continuously poll SQS here. For this project, we will
        // trigger it manually for simplicity.
    }

    // We will call this method manually later to simulate message consumption.
    public void receiveMessages(String queueUrl) {
        try {
            sqsClient.receiveMessage(req -> req.queueUrl(queueUrl).maxNumberOfMessages(1))
                    .messages()
                    .forEach(message -> {
                        try {
                            System.out.println("Message received: " + message.body());
                            JsonNode orderNode = objectMapper.readTree(message.body());
                            Long productId = orderNode.get("productId").asLong();
                            int quantity = orderNode.get("quantity").asInt();

                            // Call the service to decrease stock
                            inventoryService.decreaseStock(productId, quantity);
                            System.out.println("Inventory updated for product: " + productId);

                            // Delete the message from the queue
                            sqsClient.deleteMessage(req -> req.queueUrl(queueUrl).receiptHandle(message.receiptHandle()));

                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
