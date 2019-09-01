import React from 'react';

import { connect } from 'react-redux';
import { fetchCategoriesData } from '../../redux/categories/categories.actions'

import CATEGORIES_DATA from '../../redux/categories/categories.data'

import './featured-categories.styles.scss';

const FeaturedCategories = ({ categories, fetchCategoriesData }) => {
    fetchCategoriesData(CATEGORIES_DATA)
    return (
        <div className='featured-categories-menu'>
            {categories ? categories.subcategories.map(category => (
                <div className='category' key={category.category_id}>
                    {category.category_name}
                </div>
            )) : null}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCategoriesData: categoriesDataFromFetch => dispatch(fetchCategoriesData(categoriesDataFromFetch))
})

const mapStateToProps = state => ({
    categories: state.categories.categoriesData
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCategories);
