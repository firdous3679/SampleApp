// src/pages/Cart.js
import React, { useContext } from 'react'; // Import useContext
import '../Styles/Cart.css'; // Optional: Import a CSS file for styling
import { CartContext } from '../CartContext'; // Import CartContext


const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext); // Use CartContext to access cartItems and removeFromCart

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
    );
};


export default Cart;