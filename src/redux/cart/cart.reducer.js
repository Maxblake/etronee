import CartActionTypes from './cart.types';
import { addItemToCart, addItemToCartWithQuantity } from './cart.utils';

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.ADD_ITEM_WITH_QUANTITY:
      return {
        ...state,
        cartItems: addItemToCartWithQuantity(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
