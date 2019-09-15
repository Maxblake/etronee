import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './cart-empty.styles.scss';

const CartEmpty = ({ currentUser }) => {
  return (
    <div className='cart-empty_container'>
      <div className='cart-empty_title'>Your cart is empty</div>
      <div className='cart-empty_text'>
        Browse our{' '}
        <Link className='cart-empty-link' to='/'>
          <span className='homepage-link'>homepage</span>
        </Link>{' '}
        to add some items to shopping cart
        {currentUser ? (
          '.'
        ) : (
          <span>
            {' '}
            or become a member with us by {''}
            <Link className='cart-empty-link' to='/signup'>
              <span className='create-account-link'>creating an account.</span>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CartEmpty);
