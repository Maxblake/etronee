import React from 'react';

import SpinnerBlock from '../spinner-block/spinner-block.component';

import './category.styles.scss';

const Category = ({ categoryData, isFetched, ...otherProps }) => {
  return (
    <div>
      {isFetched ? (
        categoryData.products.map(product => (
          <div className='product' key={product.product_id}>
            {product.product_name}
          </div>
        ))
      ) : (
        <SpinnerBlock />
      )}
    </div>
  );
};

export default Category;
