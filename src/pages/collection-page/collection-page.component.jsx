import React from 'react';
import { connect } from 'react-redux';

import { selectFindArduinoCategoriesByParams } from '../../redux/arduino-categories/arduino-categories.selectors';
import { selectFindPiCategoriesByParams } from '../../redux/pi-categories/pi-categories.selectors';
import { selectFindFeaturedCategoriesByParams } from '../../redux/featured-categories/featured-categories.selectors';

import './collection-page.styles.scss';

const CollectionPage = ({ collection }) => {
  return (
    <div>
      <div>{collection.category_name}</div>
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
