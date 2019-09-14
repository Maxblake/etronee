import React from 'react';
import { Link } from 'react-router-dom';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  console.log(item);

  const roundPrice = (value, decimals) =>
    Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(
      decimals
    );

  return (
    <div className='checkout-item_container'>
      <div
        className='checkout-item-image'
        style={{ backgroundImage: `url(${item.product_image})` }}
      />
      <Link
        className='checkout-item-name'
        to={`/${item.product_master_category}/${item.product_id}`}
      >
        {item.product_name}
      </Link>
      <div className='checkout-quantity_section'>
        <div className='checkout-quantity-selection'>
          <div className='checkout-quantity-change'>&#8722;</div>
          <div className='checkout-quantity-number'>{item.quantity}</div>
          <div className='checkout-quantity-change'>&#43;</div>
        </div>
        <div className='checkout-item-remove'>Remove</div>
      </div>
      <div className='checkout-item-price'>
        {`$${roundPrice(item.product_price * item.quantity, 2)}`}
      </div>
    </div>
  );
};

export default CheckoutItem;
