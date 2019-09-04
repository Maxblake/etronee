import { takeLatest, call, put } from 'redux-saga/effects';

import PiCategoriesActionTypes from './pi-categories.types';
import { makeCategoriesUrl } from '../utils';
import { findBoardsCategory } from '../utils';
import {
  fetchPiCategoriesSuccess,
  fetchPiCategoriesFailure
} from './pi-categories.actions';

export function* fetchPiCategoriesAsync() {
  const piCategoriesUrl = 'https://www.adafruit.com/api/category/105';
  try {
    const piCategoriesFetchUrl = yield call(makeCategoriesUrl, piCategoriesUrl);
    const piCategoriesResponse = yield fetch(piCategoriesFetchUrl);
    const piCategoriesData = yield piCategoriesResponse.json();
    const piBoardsCategoriesData = yield call(findBoardsCategory, [
      piCategoriesData,
      '1000' /* RASPBERRY PI 4 categories (includes accessories, etc.) */
    ]);
    const piBoardsCategoryData = yield call(findBoardsCategory, [
      piBoardsCategoriesData,
      '1003' /* RASPBERRY PI 4 boards category */
    ]);
    yield put(fetchPiCategoriesSuccess(piBoardsCategoryData));
  } catch (error) {
    yield put(fetchPiCategoriesFailure(error.message));
  }
}

export function* fetchPiCategoriesStart() {
  yield takeLatest(
    PiCategoriesActionTypes.FETCH_PI_CATEGORIES_START,
    fetchPiCategoriesAsync
  );
}
