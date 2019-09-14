import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  return (
    <div>
      <div>{item.product_name}</div>
    </div>
  );
};

export default CheckoutItem;
