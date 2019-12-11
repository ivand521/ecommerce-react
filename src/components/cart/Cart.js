import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cart';

const Cart = ({ cart, removeFromCart }) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = cart => {
    const total = cart.reduce((current, item) => current + item.price, 0);
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal(cart);
  }, [cart]);

  return cart.length ? (
    <div>
      {cart.map((item, index) => (
        <div className='item' key={index}>
          {item.title} - ${item.price}
          <button
            onClick={() => {
              removeFromCart(item.title);
              calculateTotal(cart);
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>{`Total: $${total}`}</h3>
      <button>Check Out</button>
    </div>
  ) : (
    <h3>Your cart is empty</h3>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
