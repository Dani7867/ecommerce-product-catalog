package com.danish.inventoryservice.controller;

import com.danish.inventoryservice.listener.SqsListener;
import com.danish.inventoryservice.model.InventoryDto;
import com.danish.inventoryservice.service.InventoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/inventory")
public class InventoryController {

    private final InventoryService inventoryService;
    private final SqsListener sqsListener;

    public InventoryController(InventoryService inventoryService, SqsListener sqsListener) {
        this.inventoryService = inventoryService;
        this.sqsListener = sqsListener;
    }
    @GetMapping("/{productId}")
    public ResponseEntity<InventoryDto> getInventoryStatus(@PathVariable Long productId) {
        InventoryDto inventoryStatus = inventoryService.isInStock(productId);
        return ResponseEntity.ok(inventoryStatus);
    }

    @PostMapping("/test-consume")
    public ResponseEntity<String> testConsumeMessages() {
        // You will need to replace this with your actual SQS queue URL
        String queueUrl = "<YOUR_SQS_FIFO_QUEUE_URL>";
        sqsListener.receiveMessages(queueUrl);
        return ResponseEntity.ok("Attempted to consume messages.");
    }
}