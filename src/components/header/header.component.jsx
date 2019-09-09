import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

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

export default Header;
