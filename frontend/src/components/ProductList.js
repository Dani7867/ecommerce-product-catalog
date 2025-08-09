import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Fetch products from your API Gateway
            const response = await axios.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setMessage('Failed to load products.');
        } finally {
            setLoading(false);
        }
    };

    const handleOrderClick = async (productId, quantity) => {
        try {
            const orderPayload = { productId, quantity };
            setMessage(`Simulating order for product ${productId}...`);
            // This endpoint does not exist on the gateway, this is for demonstration
            // In a real app, this would be routed to an order service.
            // For now, we'll use the order-service-simulator directly.
            const response = await axios.post('http://localhost:8083/api/v1/orders/simulate', orderPayload);
            setMessage(response.data);
        } catch (error) {
            console.error("Error simulating order:", error);
            setMessage('Failed to place order.');
        }
    };

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
            {message && <p className="message-banner">{message}</p>}
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <button onClick={() => handleOrderClick(product.id, 1)}>
                            Order 1
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
