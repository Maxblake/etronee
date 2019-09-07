import React from 'react';
import { withRouter } from 'react-router-dom';

import { ReactComponent as BackgroundOne } from '../assets/category-background-one.svg';
import { ReactComponent as BackgroundTwo } from '../assets/category-background-two.svg';

import './category.styles.scss';

const Category = ({ categoryName, categoryData, history, match }) => {
  return (
    <div
      className={`category_container ${categoryName}-category_container`}
      onClick={() => history.push(`${match.url}${categoryData.category_id}`)}
    >
      {categoryName === 'featured-category' ? (
        <div
          className='featured_background-image'
          style={{
            backgroundImage: `url(${categoryData.products[0].product_image})`
          }}
        />
      ) : null}
      <span className={`${categoryName}-category_title`}>
        {categoryName === 'featured-category'
          ? categoryData.category_name
          : categoryName === 'arduino'
          ? 'Arduino'
          : 'Raspberry Pi'}
      </span>
      {categoryName === 'arduino' ? (
        <div>
          <span className='board-slogan'>Get Back your Ooo with Arduino</span>
          <BackgroundOne className='board-category-background' />
        </div>
      ) : categoryName === 'pi' ? (
        <div>
          <span className='board-slogan'>
            Sell your old iPhone and buy yourself a decent computer
          </span>
          <BackgroundTwo className='board-category-background' />
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(Category);
