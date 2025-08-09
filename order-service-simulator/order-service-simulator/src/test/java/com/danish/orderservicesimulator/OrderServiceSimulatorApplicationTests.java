package com.danish.orderservicesimulator;

import com.danish.orderservicesimulator.service.OrderPublishingService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

/**
 * Integration test to ensure the Spring context loads properly and the OrderPublishingService is mocked correctly.
 */
@SpringBootTest
class OrderServiceSimulatorApplicationTests {

    // Mock the dependency so Spring doesn't need a real implementation or Kafka setup
    @MockBean
    OrderPublishingService orderPublishingService;

    /**
     * Sanity check to verify the Spring application context starts successfully.
     */
    @Test
    void contextLoads() {
        // Nothing to assert — failure here means the application context didn't load
    }
}
