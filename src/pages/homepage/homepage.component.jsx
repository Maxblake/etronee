import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchFeaturedCategoriesStart } from '../../redux/featured-categories/featured-categories.actions';
import { fetchArduinoCategoriesStart } from '../../redux/arduino-categories/arduino-categories.actions';
import { fetchPiCategoriesStart } from '../../redux/pi-categories/pi-categories.actions';

import {
  selectPiCategoriesData,
  selectIsPiCategoriesFetched
} from '../../redux/pi-categories/pi-categories.selectors';
import {
  selectFeaturedCategoriesData,
  selectIsFeaturedCategoriesFetched
} from '../../redux/featured-categories/featured-categories.selectors';
import {
  selectArduinoCategoriesData,
  selectIsArduinoCategoriesFetched
} from '../../redux/arduino-categories/arduino-categories.selectors';

import Category from '../../components/category/category.component';
import SpinnerBlock from '../../components/spinner-block/spinner-block.component';

import './homepage.styles.scss';

class HomePage extends Component {
  componentDidMount() {
    const {
      fetchFeaturedCategoriesStart,
      fetchArduinoCategoriesStart,
      fetchPiCategoriesStart
    } = this.props;
    fetchFeaturedCategoriesStart();
    fetchArduinoCategoriesStart();
    fetchPiCategoriesStart();
  }

  render() {
    const {
      featuredCategoriesData,
      arduinoCategoriesData,
      piCategoriesData,
      isFeaturedCategoriesFetched,
      isArduinoCategoriesFetched,
      isPiCategoriesFetched
    } = this.props;

    return (
      <div className='homepage'>
        <div className='boards-categories'>
          <h2>From Arduino to Raspberry Pi</h2>
          <Category
            categoryName='arduino'
            categoryData={arduinoCategoriesData}
            isFetched={isArduinoCategoriesFetched}
          />
          <Category
            categoryName='pi'
            categoryData={piCategoriesData}
            isFetched={isPiCategoriesFetched}
          />
        </div>
        <div className='featured-categories'>
          <h2>Featured Categories</h2>
          {isFeaturedCategoriesFetched ? (
            featuredCategoriesData.subcategories.map(subcategory =>
              !subcategory.subcategories.length ? (
                <div key={subcategory.category_id}>
                  {subcategory.category_name}
                </div>
              ) : null
            )
          ) : (
            <SpinnerBlock />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFeaturedCategoriesStart: () => dispatch(fetchFeaturedCategoriesStart()),
  fetchArduinoCategoriesStart: () => dispatch(fetchArduinoCategoriesStart()),
  fetchPiCategoriesStart: () => dispatch(fetchPiCategoriesStart())
});

const mapStateToProps = createStructuredSelector({
  featuredCategoriesData: selectFeaturedCategoriesData,
  arduinoCategoriesData: selectArduinoCategoriesData,
  piCategoriesData: selectPiCategoriesData,
  isFeaturedCategoriesFetched: selectIsFeaturedCategoriesFetched,
  isArduinoCategoriesFetched: selectIsArduinoCategoriesFetched,
  isPiCategoriesFetched: selectIsPiCategoriesFetched
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
