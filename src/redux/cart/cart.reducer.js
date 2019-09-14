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

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItems => cartItems.product_id !== action.payload.product_id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
