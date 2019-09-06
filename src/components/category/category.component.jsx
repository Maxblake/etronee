import React from 'react';
import { withRouter } from 'react-router-dom';

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
        <span className='board-slogan'>Get Back your Ooo with Arduino</span>
      ) : categoryName === 'pi' ? (
        <span className='board-slogan'>
          Sell your old iPhone and buy yourself a decent computer
        </span>
      ) : null}
    </div>
  );
};

export default withRouter(Category);
