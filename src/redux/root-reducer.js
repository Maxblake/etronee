import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import featuredCategoriesReducer from './featured-categories/featured-categories.reducer';
import arduinoCategoriesReducer from './arduino-categories/arduino-categories.reducer';
import piCategoriesReducer from './pi-categories/pi-categories.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['featuredCategories', 'arduinoCategories', 'piCategories']
};

const rootReducer = combineReducers({
  featuredCategories: featuredCategoriesReducer,
  arduinoCategories: arduinoCategoriesReducer,
  piCategories: piCategoriesReducer
});

export default persistReducer(persistConfig, rootReducer);
