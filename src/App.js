import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import SpinnerCycle from './components/spinner-cycle/spinner-cycle.component';

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInPage = lazy(() =>
  import('./pages/signin-page/signin-page.component')
);
const CollectionPage = lazy(() =>
  import('./pages/collection-page/collection-page.component')
);

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={WaitingComponent(HomePage)} />
        <Route exact path='/signin' component={WaitingComponent(SignInPage)} />
        <Route
          path='/:categoryId'
          component={WaitingComponent(CollectionPage)}
        />
      </Switch>
    </div>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<SpinnerCycle />}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
