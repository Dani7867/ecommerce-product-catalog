package com.danish.inventoryservice.repository;

import com.danish.inventoryservice.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory,Long> {
    /**
     * Finds inventory by the product's unique ID.
     * Spring Data JPA automatically creates the implementation for this method.
     */
    Optional<Inventory> findByProductId(Long productId);
}
