import React from 'react';
import { withRouter } from 'react-router-dom';

import './product-overview.styles.scss';

const ProductOverview = ({ product, match, history }) => {
  return (
    <div
      key={`${product.product_id}_container`}
      className='overview-product_container'
    >
      <div
        key={`${product.product_id}_image`}
        className='overview-product_image'
        style={{ backgroundImage: `url(${product.product_image})` }}
        onClick={() => history.push(`${match.url}/${product.product_id}`)}
      />

      <div
        key={`${product.product_id}_section`}
        className='overview-product_section'
      >
        <span
          key={`${product.product_id}_name`}
          className='overview-product_name'
          onClick={() => history.push(`${match.url}/${product.product_id}`)}
        >
          {product.product_name}
        </span>

        <div className='stock-label_field' key={`${product.product_id}_stock`}>
          {parseInt(product.product_stock) > 0 ||
          product.product_stock === 'in stock' ? (
            <span className='in-stock-label'>In Stock</span>
          ) : (
            <span className='out-of-stock-label'>Out of Stock</span>
          )}
        </div>

        <span
          key={`${product.product_id}_price`}
          className='overview-product_price'
        >{`$${product.product_price}`}</span>
      </div>
    </div>
  );
};

export default withRouter(ProductOverview);
