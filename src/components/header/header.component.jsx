import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';

import './header.styles.scss';

const Header = ({ currentUser, signOutStart }) => {
  return (
    <div className='header-container'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options-container'>
        {currentUser ? (
          <div className='signin-option' onClick={signOutStart}>
            Sign Out
          </div>
        ) : (
          <Link className='signin-option' to='/signin'>
            Sign In
          </Link>
        )}
        <div className='cart-container'>
          <CartIcon className='cart-icon' />
          <div className='cart-total'>1</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
