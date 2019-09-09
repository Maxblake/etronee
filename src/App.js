import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import SpinnerCycle from './components/spinner-cycle/spinner-cycle.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInPage = lazy(() =>
  import('./pages/sign-in-page/sign-in-page.component')
);
const SignUpPage = lazy(() =>
  import('./pages/sign-up-page/sign-up-page.component')
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObj => {
      if (userAuthObj) {
        const userRef = await createUserProfileDocument(userAuthObj);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: null });
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
            exact
            path='/signup'
            component={WaitingComponent(SignUpPage)}
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
