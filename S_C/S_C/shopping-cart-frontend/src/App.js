import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
  };

  const updateQuantity = (productId, change) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const updatedQuantity = item.quantity + change;
        setTotal(total + change * item.price);
        return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    const productToRemove = cart.find((item) => item.id === productId);
    setTotal(total - productToRemove.price * productToRemove.quantity);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="app">
        <Navbar cartItems={cart} total={total} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                total={total}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
