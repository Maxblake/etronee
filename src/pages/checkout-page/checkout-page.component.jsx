import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../../components/custom-button/custom-button.component';
import CartEmpty from '../../components/cart-empty/cart-empty.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout-page.styles.scss';

const CheckoutPage = ({ currentUser, cartItems }) => {
  return (
    <div className='checkout-page-container'>
      <div className='welcome'>{`Hi! ${
        currentUser ? currentUser.displayName : 'Guest'
      }, ready to check out?😀`}</div>
      {cartItems.length ? (
        <CustomButton className='checkout-button'>Checkout</CustomButton>
      ) : (
        <CartEmpty />
      )}

      <div className='checkout-items-container'>
        {cartItems.map(item => (
          <CheckoutItem key={`${item.product_id}_checkout-item`} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
