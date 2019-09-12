import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import SpinnerCycle from '../../components/spinner-cycle/spinner-cycle.component';

import './category-page.styles.scss';

const CollectionPage = lazy(() =>
  import('../collection-page/collection-page.component')
);
const ProductPage = lazy(() =>
  import('../product-page/product-page.component')
);

const CategoryPage = ({ match }) => {
  return (
    <div>
      <Suspense fallback={<SpinnerCycle />}>
        <Route exact path={match.path} component={CollectionPage} />
        <Route path={`${match.path}/:productId`} component={ProductPage} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
