import React from 'react';

import './product-overview.styles.scss';

const ProductOverview = ({ product }) => {
  return (
    <div
      key={`${product.product_id}_container`}
      className='overview-product_container'
    >
      <div
        key={`${product.product_id}_image`}
        className='overview-product_image'
        style={{ backgroundImage: `url(${product.product_image})` }}
      />
      <div
        key={`${product.product_id}_section`}
        className='overview-product_section'
      >
        <span
          key={`${product.product_id}_name`}
          className='overview-product_name'
        >
          {product.product_name}
        </span>
        <span
          key={`${product.product_id}_stock`}
          className='overview-product_stock'
        >
          {product.product_stock === 'in stock' ? 'In Stock' : 'Out Of Stock'}
        </span>
        <span
          key={`${product.product_id}_price`}
          className='overview-product_price'
        >{`$${product.product_price}`}</span>
      </div>
    </div>
  );
};

export default ProductOverview;
