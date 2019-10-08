import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import featuredCategoriesReducer from './featured-categories/featured-categories.reducer';
import arduinoCategoriesReducer from './arduino-categories/arduino-categories.reducer';
import piCategoriesReducer from './pi-categories/pi-categories.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['featuredCategories', 'arduinoCategories', 'piCategories', 'cart']
};

const rootReducer = combineReducers({
  featuredCategories: featuredCategoriesReducer,
  arduinoCategories: arduinoCategoriesReducer,
  piCategories: piCategoriesReducer,
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
