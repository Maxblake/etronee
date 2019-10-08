import { takeLatest, call, put } from 'redux-saga/effects';

import AdruinoCategoriesActionTypes from './arduino-categories.types';
import { makeCategoriesUrl } from '../utils';
import { findBoardsCategory } from '../utils';
import {
  fetchArduinoCategoriesSuccess,
  fetchArduinoCategoriesFailure
} from './arduino-categories.actions';

export function* fetchArduinoCategoriesAsync() {
  const arduinoCategoriesUrl = 'https://www.adafruit.com/api/category/17';
  try {
    const arduinoCategoriesFetchUrl = yield call(
      makeCategoriesUrl,
      arduinoCategoriesUrl
    );
    const arduinoCategoriesResponse = yield fetch(arduinoCategoriesFetchUrl);
    const arduinoCategoriesData = yield arduinoCategoriesResponse.json();
    const arduinoBoardsCategoryData = yield call(findBoardsCategory, [
      arduinoCategoriesData,
      '171' /* ARDUINO BOARDS category*/
    ]);
    yield put(fetchArduinoCategoriesSuccess(arduinoBoardsCategoryData));
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
