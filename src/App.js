import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import SpinnerCycle from './components/spinner-cycle/spinner-cycle.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

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
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObj => {
      if (userAuthObj) {
        const userRef = await createUserProfileDocument(userAuthObj);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuthObj);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    const SignInPageHOC = waitingComponent(SignInPage);
    const SignUpPageHOC = waitingComponent(SignUpPage);

    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={waitingComponent(HomePage)} />
          <Route
            exact
            path='/signin'
            render={props =>
              currentUser ? <Redirect to='/' /> : <SignInPageHOC {...props} />
            }
          />
          <Route
            exact
            path='/signup'
            render={props =>
              currentUser ? <Redirect to='/' /> : <SignUpPageHOC {...props} />
            }
          />
          <Route
            path='/:categoryId'
            component={waitingComponent(CollectionPage)}
          />
        </Switch>
      </div>
    );
  }
}

const waitingComponent = Component => ({ ...props }) => (
  <Suspense fallback={<SpinnerCycle />}>
    <Component {...props} />
  </Suspense>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
