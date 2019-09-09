import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import SpinnerCycle from './components/spinner-cycle/spinner-cycle.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInPage = lazy(() =>
  import('./pages/sign-in-page/sign-in-page.component')
);
const CollectionPage = lazy(() =>
  import('./pages/collection-page/collection-page.component')
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={WaitingComponent(HomePage)} />
          <Route
            exact
            path='/signin'
            component={WaitingComponent(SignInPage)}
          />
          <Route
            path='/:categoryId'
            component={WaitingComponent(CollectionPage)}
          />
        </Switch>
      </div>
    );
  }
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<SpinnerCycle />}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
