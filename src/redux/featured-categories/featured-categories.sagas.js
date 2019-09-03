import { takeLatest, call, put } from 'redux-saga/effects';

import { makeFeaturedCategoriesUrl } from './featured-categories.utils';
import FeaturedCategoriesActionTypes from './featured-categories.types';
import {
  fetchFeaturedCategoriesSuccess,
  fetchFeaturedCategoriesFailure
} from './featured-categories.actions';

export function* fetchFeaturedCategoriesAsync() {
  const featuredCategoriesUrl = 'https://www.adafruit.com/api/category/54';
  try {
    const featuredCategoriesFetchUrl = yield call(
      makeFeaturedCategoriesUrl,
      featuredCategoriesUrl
    );
    const featuredCategoriesResponse = yield fetch(featuredCategoriesFetchUrl);
    const featuredCategoriesData = yield featuredCategoriesResponse.json();
    yield put(fetchFeaturedCategoriesSuccess(featuredCategoriesData));
  } catch (error) {
    yield put(fetchFeaturedCategoriesFailure(error.message));
  }
}

export function* fetchFeaturedCategoriesStart() {
  yield takeLatest(
    FeaturedCategoriesActionTypes.FETCH_FEATURED_CATEGORIES_START,
    fetchFeaturedCategoriesAsync
  );
}
