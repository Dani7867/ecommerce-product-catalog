package com.danish.inventoryservice.service;

import com.danish.inventoryservice.model.InventoryDto;
import com.danish.inventoryservice.repository.InventoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    /**
     * Checks if a product is in stock.
     * For now, this is a placeholder. We will expand this later.
     * @param productId The ID of the product to check.
     * @return An InventoryDto with the product's stock information.
     */
    @Transactional(readOnly = true)
    public InventoryDto isInStock(Long productId) {
        return inventoryRepository.findByProductId(productId)
                .map(inventory -> new InventoryDto(inventory.getProductId(), inventory.getQuantity()))
                .orElse(new InventoryDto(productId, 0)); // Assume 0 stock if not found
    }
}