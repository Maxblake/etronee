import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPiCategoriesStart } from '../../redux/pi-categories/pi-categories.actions';

import SpinnerBlock from '../spinner-block/spinner-block.component';

import './pi-categories.styles.scss';

class PiCategories extends Component {
  componentDidMount() {
    const { fetchPiCategoriesStart } = this.props;
    fetchPiCategoriesStart();
  }

  render() {
    const { piCategoriesData, isPiCategoriesFetched } = this.props;
    return (
      <div className='pi-categories-menu'>
        {isPiCategoriesFetched ? (
          piCategoriesData.subcategories.map(category => (
            <div className='pi-category' key={category.category_id}>
              {category.category_name}
            </div>
          ))
        ) : (
          <SpinnerBlock />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPiCategoriesStart: () => dispatch(fetchPiCategoriesStart())
});

const mapStateToProps = ({
  piCategories: { piCategoriesData, isPiCategoriesFetched }
}) => ({ piCategoriesData, isPiCategoriesFetched });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PiCategories);
