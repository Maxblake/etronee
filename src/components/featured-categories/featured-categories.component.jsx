import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchFeaturedCategoriesStart } from '../../redux/featured-categories/featured-categories.actions'

import SpinnerBlock from '../spinner-block/spinner-block.component'

import './featured-categories.styles.scss';

class FeaturedCategories extends Component {
    componentDidMount() {
        const { fetchFeaturedCategoriesStart } = this.props;
        fetchFeaturedCategoriesStart();
    }

    render() {
        const { featuredCategoriesData, isFeaturedCategoriesFetched } = this.props;
        return (
            <div className='featured-categories-menu'>
                {isFeaturedCategoriesFetched ? featuredCategoriesData.subcategories.map(category => (
                    <div className='featured-category' key={category.category_id}>
                        {category.category_name}
                    </div>
                )) : <SpinnerBlock />}
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    fetchFeaturedCategoriesStart: () => dispatch(fetchFeaturedCategoriesStart())
})

const mapStateToProps = ({ featuredCategories: { featuredCategoriesData, isFeaturedCategoriesFetched } }) => ({
    featuredCategoriesData,
    isFeaturedCategoriesFetched
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCategories);
