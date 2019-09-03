import { takeLatest, call, put } from 'redux-saga/effects';

import PiCategoriesActionTypes from './pi-categories.types';
import { makePiCategoriesUrl } from './pi-categories.utils';
import {
  fetchPiCategoriesSuccess,
  fetchPiCategoriesFailure
} from './pi-categories.actions';

export function* fetchPiCategoriesAsync() {
  const piCategoriesUrl = 'https://www.adafruit.com/api/category/105';
  try {
    const piCategoriesFetchUrl = yield call(
      makePiCategoriesUrl,
      piCategoriesUrl
    );
    const piCategoriesResponse = yield fetch(piCategoriesFetchUrl);
    const piCategoriesData = yield piCategoriesResponse.json();
    yield put(fetchPiCategoriesSuccess(piCategoriesData));
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
