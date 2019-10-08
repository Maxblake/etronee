import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import { roundPrice } from '../../redux/cart/cart.utils';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
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
          <div
            className='checkout-quantity-change'
            onClick={() => removeItem(item)}
          >
            &#8722;
          </div>
          <div className='checkout-quantity-number'>{item.quantity}</div>
          <div
            className='checkout-quantity-change'
            onClick={() => addItem(item)}
          >
            &#43;
          </div>
        </div>
        <div className='checkout-item-remove' onClick={() => clearItem(item)}>
          Remove
        </div>
      </div>

      <div className='checkout-item-price'>
        {`$${roundPrice(item.product_price * item.quantity, 2)}`}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
