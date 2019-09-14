import CartActionTypes from './cart.types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const addItemWithQuantity = itemAndQuantity => ({
  type: CartActionTypes.ADD_ITEM_WITH_QUANTITY,
  payload: itemAndQuantity
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
