package com.danish.orderservicesimulator.controller;

import com.danish.orderservicesimulator.service.OrderPublishingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderPublishingService orderPublishingService;

    public OrderController(OrderPublishingService orderPublishingService) {
        this.orderPublishingService = orderPublishingService;
    }

    @PostMapping("/simulate")
    public ResponseEntity<String> simulateOrder(@RequestBody String orderJson) {
        orderPublishingService.simulateOrder(orderJson);
        return ResponseEntity.ok("Order simulation started. Message sent to SQS.");
    }
}