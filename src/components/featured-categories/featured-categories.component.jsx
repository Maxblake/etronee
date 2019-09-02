import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCategoriesStart } from '../../redux/categories/categories.actions'

import './featured-categories.styles.scss';

class FeaturedCategories extends Component {
    componentDidMount() {
        const { fetchCategoriesStart } = this.props;
        fetchCategoriesStart();
    }

    render() {
        const { categoriesData, isCategoriesFetched } = this.props;
        return (
            <div className='featured-categories-menu'>
                {isCategoriesFetched ? categoriesData.subcategories.map(category => (
                    <div className='category' key={category.category_id}>
                        {category.category_name}
                    </div>
                )) : null}
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
})

const mapStateToProps = ({ categories: { categoriesData, isCategoriesFetched } }) => ({
    categoriesData,
    isCategoriesFetched
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCategories);
