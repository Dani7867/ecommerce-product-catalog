package com.danish.productcatalogservice.service;

import com.danish.productcatalogservice.model.Product;
import com.danish.productcatalogservice.model.ProductDto;
import com.danish.productcatalogservice.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    // Constructor Injection is used to get the repository bean
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * Finds all products and converts them to DTOs.
     * @return A list of all product DTOs.
     */
    public List<ProductDto> findAll() {
        // Use modern Java Streams to map entities to DTOs
        return productRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private ProductDto convertToDto(Product product) {
        return new ProductDto(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getCategory(),
                product.getPrice()
        );
    }
}