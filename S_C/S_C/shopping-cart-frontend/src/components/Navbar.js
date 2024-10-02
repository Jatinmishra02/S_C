import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartItems, total }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="navbar">
            <div className="logo">
                <h1>Veggy</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for Vegetables and Fruits" />
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Products</Link>
                <Link to="/cart" className="nav-link">Cart</Link>
            </div>
            <div className="cart-info">
                <p>No. of items: {totalItems}</p>
                <p>Sub Total: Rs. {total}</p>
                <div className="cart-icon">
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
