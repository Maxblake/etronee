import { takeLatest, call, put } from 'redux-saga/effects';

import AdruinoCategoriesActionTypes from './arduino-categories.types';
import { makeArduinoCategoriesUrl } from './arduino-categories.utils';
import {
  fetchArduinoCategoriesSuccess,
  fetchArduinoCategoriesFailure
} from './arduino-categories.actions';

export function* fetchArduinoCategoriesAsync() {
  const arduinoCategoriesUrl = 'https://www.adafruit.com/api/category/17';
  try {
    const arduinoCategoriesFetchUrl = yield call(
      makeArduinoCategoriesUrl,
      arduinoCategoriesUrl
    );
    const arduinoCategoriesResponse = yield fetch(arduinoCategoriesFetchUrl);
    const arduinoCategoriesData = yield arduinoCategoriesResponse.json();
    yield put(fetchArduinoCategoriesSuccess(arduinoCategoriesData));
  } catch (error) {
    yield put(fetchArduinoCategoriesFailure(error.message));
  }
}

export function* fetchArduinoCategoriesStart() {
  yield takeLatest(
    AdruinoCategoriesActionTypes.FETCH_ARDUINO_CATEGORIES_START,
    fetchArduinoCategoriesAsync
  );
}
