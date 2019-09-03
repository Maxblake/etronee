import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchArduinoCategoriesStart } from '../../redux/arduino-categories/arduino-categories.actions';

import SpinnerBlock from '../spinner-block/spinner-block.component';

import './arduino-categories.styles.scss';

class ArduinoCategories extends Component {
  componentDidMount() {
    const { fetchArduinoCategoriesStart } = this.props;
    fetchArduinoCategoriesStart();
  }

  render() {
    const { arduinoCategoriesData, isArduinoCategoriesFetched } = this.props;
    return (
      <div className='arduino-categories-menu'>
        {isArduinoCategoriesFetched ? (
          arduinoCategoriesData.products.map(product => (
            <div className='arduino-product' key={product.product_id}>
              {product.product_name}
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
  fetchArduinoCategoriesStart: () => dispatch(fetchArduinoCategoriesStart())
});

const mapStateToProps = ({
  arduinoCategories: { arduinoCategoriesData, isArduinoCategoriesFetched }
}) => ({ arduinoCategoriesData, isArduinoCategoriesFetched });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArduinoCategories);
