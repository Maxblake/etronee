import React from 'react';

import ArduinoCategories from '../arduino-categories/arduino-categories.component';
import PiCategories from '../pi-categories/pi-categories.component';

import './boards-categories.styles.scss';

const BoardsCategories = () => {
  return (
    <div className='boards-categories-menu'>
      <ArduinoCategories />
      <PiCategories />
    </div>
  );
};

export default BoardsCategories;
