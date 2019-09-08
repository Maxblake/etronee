import React from 'react';
import { connect } from 'react-redux';

import { selectFindArduinoCategoriesByParams } from '../../redux/arduino-categories/arduino-categories.selectors';
import { selectFindPiCategoriesByParams } from '../../redux/pi-categories/pi-categories.selectors';
import { selectFindFeaturedCategoriesByParams } from '../../redux/featured-categories/featured-categories.selectors';

import ProductOverview from '../../components/product-overview/product-overview.component';

import './collection-page.styles.scss';

const CollectionPage = ({ collection }) => {
  return (
    <div className='collection-page_container'>
      <h2 className='collection-page_title'>
        {collection.category_id === '171'
          ? 'Arduino Boards'
          : collection.category_id === '1003'
          ? 'Raspberry Pi Boards'
          : collection.category_name}
      </h2>
      {collection.products.map(product => (
        <ProductOverview
          key={`${product.product_id}_collection-overview`}
          product={product}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.categoryId === '171') {
    return { collection: selectFindArduinoCategoriesByParams(state) };
  } else if (ownProps.match.params.categoryId === '1003') {
    return { collection: selectFindPiCategoriesByParams(state) };
  } else {
    return {
      collection: selectFindFeaturedCategoriesByParams(
        ownProps.match.params.categoryId
      )(state)
    };
  }
};

export default connect(mapStateToProps)(CollectionPage);
