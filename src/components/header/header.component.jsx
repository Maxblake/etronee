import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../assets/logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = ({ currentUser, signOutStart, history, match }) => {
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
        <Link className='cart-option' to='/checkout'>
          <CartIcon />
        </Link>
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
