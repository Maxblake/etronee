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

export const addItemToCartWithQuantity = (
  cartItems,
  cartItemToAddWithQuantity
) => {
  const { product, quantitySelection } = cartItemToAddWithQuantity;

  const existingCartItem = cartItems.find(
    cartItem => cartItem.product_id === product.product_id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.product_id === product.product_id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantitySelection
          }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: quantitySelection }];
};

export const roundPrice = (value, decimals) =>
  Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(
    decimals
  );

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.product_id === cartItemToRemove.product_id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      cartItem => cartItem.product_id !== cartItemToRemove.product_id
    );
  }

  return cartItems.map(cartItem =>
    cartItem.product_id === cartItemToRemove.product_id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
