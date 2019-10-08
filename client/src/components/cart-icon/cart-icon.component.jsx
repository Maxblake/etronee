import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as Icon } from '../assets/cart.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount }) => {
  return (
    <div className='cart-container'>
      <Icon className='cart-icon' />

      {itemCount ? (
        <div className='cart-total'>{itemCount}</div>
      ) : (
        <div className='cart-total invisible' />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartIcon);
