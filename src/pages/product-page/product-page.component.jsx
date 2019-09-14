import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectFindArduinoProductByParams } from '../../redux/arduino-categories/arduino-categories.selectors';
import { selectFindPiProductByParams } from '../../redux/pi-categories/pi-categories.selectors';
import { selectFindFeaturedProductByParams } from '../../redux/featured-categories/featured-categories.selectors';
import { addItemWithQuantity } from '../../redux/cart/cart.actions';

import CustomButton from '../../components/custom-button/custom-button.component';

import './product-page.styles.scss';

class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      quantitySelection: 1,
      submit: false
    };
  }

  increaseQuantity = () => {
    const { quantitySelection } = this.state;
    this.setState({ quantitySelection: quantitySelection + 1 });
  };

  decreaseQuantity = () => {
    const { quantitySelection } = this.state;
    this.setState({ quantitySelection: quantitySelection - 1 });
  };

  toggleSubmit = () => {
    this.setState({ submit: true });
  };

  render() {
    const { product, addItem } = this.props;
    const { quantitySelection, submit } = this.state;
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
              {parseInt(product.product_stock) > 0 ||
              product.product_stock === 'in stock'
                ? 'In Stock'
                : 'Out Of Stock'}
            </span>
            <div className='quantity-selection'>
              <div
                className='quantity-change'
                onClick={quantitySelection > 1 ? this.decreaseQuantity : null}
              >
                &#8722;
              </div>
              <div className='quantity-number'>{quantitySelection}</div>
              <div className='quantity-change' onClick={this.increaseQuantity}>
                &#43;
              </div>
            </div>
            <CustomButton
              className='cart-button'
              type='button'
              onClick={() => {
                addItem({ product, quantitySelection });
                this.toggleSubmit();
              }}
              disabled={parseInt(product.product_stock) <= 0 ? true : false}
            >
              {parseInt(product.product_stock) > 0 ||
              product.product_stock === 'in stock'
                ? 'Add to Cart'
                : 'Item Out of Stock'}
            </CustomButton>
            {submit ? (
              <span role='img' aria-label='submit-notification'>
                👌
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

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
  addItem: itemAndQuantity => dispatch(addItemWithQuantity(itemAndQuantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
