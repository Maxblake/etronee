import React from 'react';
import { connect } from 'react-redux';

import { selectFindArduinoProductByParams } from '../../redux/arduino-categories/arduino-categories.selectors';
import { selectFindPiProductByParams } from '../../redux/pi-categories/pi-categories.selectors';
import { selectFindFeaturedProductByParams } from '../../redux/featured-categories/featured-categories.selectors';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../../components/custom-button/custom-button.component';

import './product-page.styles.scss';

const ProductPage = ({ product, addItem }) => {
  return (
    <div className='product-page'>
      <h2>{product.product_name}</h2>
      <h3>{`ID: ${product.product_id}`}</h3>
      <div className='product-info'>
        <div
          className='product-image'
          style={{ backgroundImage: `url(${product.product_image})` }}
        />
        <div className='product-price-section'>
          <span className='product-price'>{`$${product.product_price}`}</span>
          <span className='product-stock'>
            {parseInt(product.product_stock) >= 0 ||
            product.product_stock === 'in stock'
              ? 'In Stock'
              : 'Out Of Stock'}
          </span>
          <CustomButton
            className='cart-button'
            type='button'
            onClick={() => addItem(product)}
            disabled={parseInt(product.product_stock) <= 0 ? true : false}
          >
            {parseInt(product.product_stock) >= 0 ||
            product.product_stock === 'in stock'
              ? 'Add to Cart'
              : 'Item Out of Stock'}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.categoryId === '171') {
    return {
      product: selectFindArduinoProductByParams(
        ownProps.match.params.productId
      )(state)
    };
  } else if (ownProps.match.params.categoryId === '1003') {
    return {
      product: selectFindPiProductByParams(ownProps.match.params.productId)(
        state
      )
    };
  } else {
    return {
      product: selectFindFeaturedProductByParams(
        ownProps.match.params.productId
      )(state)
    };
  }
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
