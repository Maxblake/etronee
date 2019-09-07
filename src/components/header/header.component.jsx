import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/logo.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options-container'>
        <Link className='signin-option' to='./signin'>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
