import React from 'react';

import './cart-empty.styles.scss';

const CartEmpty = () => {
  return (
    <div className='cart-empty_container'>
      <div className='cart-empty_message'>cart is empty</div>
    </div>
  );
};

export default CartEmpty;
