// src/components/Header.js


import React, { useContext } from 'react'; // Import useContext
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../Styles/header.css'; // Optional: for styling the header
import { CartContext } from '../CartContext'; // Import CartContext

const Header = () => {
    const { cartItems } = useContext(CartContext); // Use CartContext to access cartItems

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total items

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">E-Shop</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart ({totalItems})</Link></li> {/* Display total items in cart */}
                </ul>
            </nav>
        </header>
    );
}
export default Header;

