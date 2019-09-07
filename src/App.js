import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import SpinnerCycle from './components/spinner-cycle/spinner-cycle.component';

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const CollectionPage = lazy(() =>
  import('./pages/collection-page/collection-page.component')
);

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Suspense fallback={<SpinnerCycle />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/:categoryId' component={CollectionPage} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
