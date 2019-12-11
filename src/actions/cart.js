import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (title, price, quantity = 1) => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: { title, price, quantity } });
};

export const removeFromCart = title => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, payload: { title } });
};
