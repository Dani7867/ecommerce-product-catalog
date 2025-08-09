package com.danish.inventoryservice.service;

import com.danish.inventoryservice.model.InventoryDto;
import com.danish.inventoryservice.model.Inventory;
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
     * @param productId The ID of the product to check.
     * @return An InventoryDto with the product's stock information.
     */
    @Transactional(readOnly = true)
    public InventoryDto isInStock(Long productId) {
        return inventoryRepository.findByProductId(productId)
                .map(inventory -> new InventoryDto(inventory.getProductId(), inventory.getQuantity()))
                .orElse(new InventoryDto(productId, 0)); // Assume 0 stock if not found
    }

    /**
     * Decreases the stock of a given product.
     * @param productId The ID of the product to update.
     * @param quantity The amount to decrease.
     * @throws IllegalArgumentException if stock is insufficient or product not found.
     */
    @Transactional
    public void decreaseStock(Long productId, int quantity) {
        Inventory inventory = inventoryRepository.findByProductId(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found in inventory: " + productId));

        if (inventory.getQuantity() < quantity) {
            throw new IllegalArgumentException("Insufficient stock for product: " + productId);
        }

        inventory.setQuantity(inventory.getQuantity() - quantity);
        inventoryRepository.save(inventory);
    }
}
