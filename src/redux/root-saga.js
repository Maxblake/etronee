import { all, call } from 'redux-saga/effects';

import { fetchCategoriesStart } from './categories/categories.sagas';

export default function* rootSaga() {
  yield all([call(fetchCategoriesStart)]);
}
