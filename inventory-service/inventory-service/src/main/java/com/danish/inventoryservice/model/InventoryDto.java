package com.danish.inventoryservice.model;

public record InventoryDto(
        Long productId,
        int quantity
) {}