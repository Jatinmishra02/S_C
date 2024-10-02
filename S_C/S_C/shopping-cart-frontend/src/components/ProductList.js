import React from 'react';
import './ProductList.css';


const products = [
    { id: 1, name: 'Carrot - 1 Kg', price: 56, image: '../images/carrot.png' },
    { id: 2, name: 'Tomato - 1 Kg', price: 16, image: '../images/tomato.png' },
    { id: 3, name: 'Beans - 1 Kg', price: 82, image: '../images/beans.png' },
    { id: 4, name: 'Brinjal - 1 Kg', price: 35, image: '../images/brinjal.png' },
    { id: 5, name: 'Capsicum  - 1 Kg', price: 50, image: '../images/Capsicum .png' }
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>Rs. {product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
