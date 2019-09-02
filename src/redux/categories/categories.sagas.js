import { takeLatest, put } from 'redux-saga/effects';

import CategoriesActionTypes from './categories.types';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from './categories.actions';

export function* fetchCategoriesAsync() {
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';
  try {
    const categoriesResponse = yield fetch(
      `${corsUrl}https://www.adafruit.com/api/category/54`
    );
    const categoriesData = yield categoriesResponse.json();
    yield put(fetchCategoriesSuccess(categoriesData));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

export function* fetchCategoriesStart() {
  yield takeLatest(
    CategoriesActionTypes.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
