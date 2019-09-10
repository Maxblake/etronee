import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../assets/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header-container'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options-container'>
        {currentUser ? (
          <div className='signin-option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='signin-option' to='/signin'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
