import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';

const SleepBetter = ({ addToCart }) => {
  return (
    <div>
      <h1>Sleep Better</h1>
      <p>This subliminal audio can help you sleep better every night!</p>
      <button
        onClick={() => {
          addToCart('Sleep Better', 10);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default connect(null, { addToCart })(SleepBetter);
