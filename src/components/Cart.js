import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
