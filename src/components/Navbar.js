import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ cart, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Simple E-Commerce Store</div>
      <div className="cart-icon" onClick={toggleCart}>
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{cart.length}</span>
        {showCart && (
          <div className="cart-dropdown">
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price.toFixed(2)}
                      <button onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(index);
                      }}>Remove</button>
                    </li>
                  ))}
                </ul>
                <p>Total: ${total.toFixed(2)}</p>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
