import React from 'react';

import './quantity.styles.scss';

const Quantity = () => {
  return (
    <div className='quantity-selection'>
      <div className='quantity-change'>&#8722;</div>
      <div className='quantity-number'>1</div>
      <div className='quantity-change'>&#43;</div>
    </div>
  );
};

export default Quantity;
