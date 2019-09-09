import React from 'react';
import { Link } from 'react-router-dom';

import './signing-link.styles.scss';

const SigningLink = ({ children, ...allProps }) => {
  return (
    <Link className='signing-link' {...allProps}>
      {children}
    </Link>
  );
};

export default SigningLink;
