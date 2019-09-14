import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import { roundPrice } from '../../redux/cart/cart.utils';

import CustomButton from '../../components/custom-button/custom-button.component';
import CartEmpty from '../../components/cart-empty/cart-empty.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout-page.styles.scss';

const CheckoutPage = ({ currentUser, cartItems, total }) => {
  return (
    <div className='checkout-page-container'>
      <div className='welcome'>{`Hi! ${
        currentUser ? currentUser.displayName : 'Guest'
      }, ready to check out?😀`}</div>

      {cartItems.length ? (
        <div className='checkout-section-header'>
          <CustomButton className='checkout-button'>Checkout</CustomButton>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Item</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}

      <div className='checkout-items-container'>
        {cartItems.map(item => (
          <CheckoutItem key={`${item.product_id}_checkout-item`} item={item} />
        ))}
      </div>

      {cartItems.length ? (
        <div className='checkout-total-price'>
          <span>Total: ${roundPrice(total, 2)}</span>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
