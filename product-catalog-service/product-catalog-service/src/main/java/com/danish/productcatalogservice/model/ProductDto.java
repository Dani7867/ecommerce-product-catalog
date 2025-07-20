package com.danish.productcatalogservice.model;

import java.math.BigDecimal;

public record ProductDto(
        Long id,
        String name,
        String description,
        String category,
        BigDecimal price
) {}