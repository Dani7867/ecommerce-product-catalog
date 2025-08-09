package com.danish.orderservicesimulator.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.sqs.SqsClient;
import software.amazon.awssdk.services.sqs.model.SendMessageRequest;
import java.util.UUID;

@Service
public class OrderPublishingService {

    private final SqsClient sqsClient;
    private final String queueUrl;

    public OrderPublishingService(SqsClient sqsClient, @Value("${aws.sqs.queue.order-placement-url}") String queueUrl) {
        this.sqsClient = sqsClient;
        this.queueUrl = queueUrl;
    }

    public void simulateOrder(String orderJson) {
        SendMessageRequest sendMessageRequest = SendMessageRequest.builder()
                .queueUrl(queueUrl)
                .messageBody(orderJson)
                .messageGroupId("order-group-1") // Required for FIFO queues
                .messageDeduplicationId(UUID.randomUUID().toString()) // Prevents duplicate messages
                .build();

        sqsClient.sendMessage(sendMessageRequest);
        System.out.println("Order message sent to SQS: " + orderJson);
    }
}