package com.danish.productcatalogservice.config;

import com.danish.productcatalogservice.model.Product;
import com.danish.productcatalogservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.math.BigDecimal;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataSeeder(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Seed data only if the database is empty
        if (productRepository.count() == 0) {
            Product product1 = new Product();
            product1.setName("Laptop Pro");
            product1.setDescription("A high-end professional laptop.");
            product1.setCategory("Electronics");
            product1.setPrice(new BigDecimal("1200.00"));

            Product product2 = new Product();
            product2.setName("Wireless Mouse");
            product2.setDescription("An ergonomic wireless mouse.");
            product2.setCategory("Electronics");
            product2.setPrice(new BigDecimal("75.50"));

            productRepository.saveAll(List.of(product1, product2));
        }
    }
}