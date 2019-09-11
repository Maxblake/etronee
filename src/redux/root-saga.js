import { all, call } from 'redux-saga/effects';

import { fetchFeaturedCategoriesStart } from './featured-categories/featured-categories.sagas';
import { fetchArduinoCategoriesStart } from './arduino-categories/arduino-categories.sagas';
import { fetchPiCategoriesStart } from './pi-categories/pi-categories.sagas';
import { userSaga } from './user/user.saga';

export default function* rootSaga() {
  yield all([
    call(fetchFeaturedCategoriesStart),
    call(fetchArduinoCategoriesStart),
    call(fetchPiCategoriesStart),
    call(userSaga)
  ]);
}
