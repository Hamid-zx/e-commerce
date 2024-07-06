// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 49.99 },
    { id: 3, name: 'Product 3', price: 19.99 },
    { id: 4, name: 'Product 4', price: 39.99 },
    { id: 5, name: 'Product 5', price: 24.99 },
    { id: 6, name: 'Product 6', price: 59.99 },
    { id: 7, name: 'Product 7', price: 34.99 },
    { id: 8, name: 'Product 8', price: 22.99 },
    { id: 9, name: 'Product 9', price: 44.99 },
    { id: 10, name: 'Product 10', price: 27.99 },
    { id: 11, name: 'Product 11', price: 31.99 },
    { id: 12, name: 'Product 12', price: 39.99 },
    { id: 13, name: 'Product 13', price: 18.99 },
    { id: 14, name: 'Product 14', price: 49.99 },
    { id: 15, name: 'Product 15', price: 59.99 },
    { id: 16, name: 'Product 16', price: 21.99 },
    { id: 17, name: 'Product 17', price: 23.99 },
    { id: 18, name: 'Product 18', price: 29.99 },
    { id: 19, name: 'Product 19', price: 42.99 },
    { id: 20, name: 'Product 20', price: 37.99 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Navbar cart={cart} removeFromCart={removeFromCart} />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
