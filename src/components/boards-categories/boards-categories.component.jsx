import React from 'react'

import ArduinoCategories from '../arduino-categories/arduino-categories.component'

import './boards-categories.styles.scss'

const BoardsCategories = () => {
    return (
        <div className='boards-categories-menu'>
            <ArduinoCategories />
            <div className='pi-category'>pi</div>
        </div>
    )
}

export default BoardsCategories