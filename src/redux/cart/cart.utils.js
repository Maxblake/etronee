export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.product_id === cartItemToAdd.product_id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.product_id === cartItemToAdd.product_id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
