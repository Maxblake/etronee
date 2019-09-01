import React from 'react'

import BoardsCategories from '../../components/boards-categories/boards-categories.component'
import FeaturedCategories from '../../components/featured-categories/featured-categories.component'

import './homepage.styles.scss'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='boards-categories'>
                <h2>From Arduino to Raspberry Pi</h2>
                <BoardsCategories />
            </div>
            <div className='featured-categories'>
                <h2>Featured Categories</h2>
                <FeaturedCategories />
            </div>
        </div>
    )
}

export default HomePage