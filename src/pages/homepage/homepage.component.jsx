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
        <div className='boards-categories_section'>
          <h2>From Arduino to Raspberry Pi</h2>
          <div className='boards-categories_overview'>
            {isArduinoCategoriesFetched ? (
              <Category
                key={arduinoCategoriesData.category_id}
                categoryName='arduino'
                categoryData={arduinoCategoriesData}
              />
            ) : null}
            {isPiCategoriesFetched ? (
              <Category
                key={piCategoriesData.category_id}
                categoryName='pi'
                categoryData={piCategoriesData}
              />
            ) : null}
          </div>
        </div>

        <div className='featured-categories-section'>
          <h2>Featured Categories</h2>
          <div className='featured-categories_overview'>
            {isFeaturedCategoriesFetched ? (
              featuredCategoriesData.subcategories.map(subcategory =>
                !subcategory.subcategories.length ? (
                  <Category
                    key={subcategory.category_id}
                    categoryName='featured-category'
                    categoryData={subcategory}
                  />
                ) : null
              )
            ) : (
              <SpinnerBlock />
            )}
          </div>
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
