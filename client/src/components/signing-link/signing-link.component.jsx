import React from 'react';
import { Link } from 'react-router-dom';

import './signing-link.styles.scss';

const SigningLink = ({ children, ...allProps }) => {
  return (
    <div className='signing-link_container'>
      <Link className='signing-link' {...allProps}>
        {children}
      </Link>
    </div>
  );
};

export default SigningLink;
