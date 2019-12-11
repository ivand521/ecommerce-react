import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      for (let i = 0; i < state.length; i++) {
        if (state[i].title === payload.title) {
          const quantity = state[i].quantity + 1;
          return [...state, { ...payload, quantity }];
        }
      }
      return [...state, payload];
    case REMOVE_FROM_CART:
      return state.filter(item => item.title !== payload.title);
    default:
      return state;
  }
}
