// src/components/ProductCard.js

import React, { useContext } from 'react'; // Import useContext
import '../Styles/productCard.css'; // Optional: for styling the product card
import { CartContext } from '../CartContext'; // Import CartContext


const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext); // Use CartContext to access addToCart

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to Cart button */}
        </div>
    );
}

export default ProductCard;