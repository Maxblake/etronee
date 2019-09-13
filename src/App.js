import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import SpinnerCycle from './components/spinner-cycle/spinner-cycle.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SignInPage = lazy(() =>
  import('./pages/sign-in-page/sign-in-page.component')
);
const SignUpPage = lazy(() =>
  import('./pages/sign-up-page/sign-up-page.component')
);
const CategoryPage = lazy(() =>
  import('./pages/category-page/category-page.component')
);
const CheckoutPage = lazy(() =>
  import('./pages/checkout-page/checkout-page.component')
);

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    const SignInPageWaiting = ComponentHOC(SignInPage);
    const SignUpPageWaiting = ComponentHOC(SignUpPage);

    return (
      <div className='App'>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' component={ComponentHOC(HomePage)} />
          <Route
            exact
            path='/signin'
            render={props =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInPageWaiting {...props} />
              )
            }
          />
          <Route
            exact
            path='/signup'
            render={props =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignUpPageWaiting {...props} />
              )
            }
          />
          <Route
            exact
            path='/checkout'
            component={ComponentHOC(CheckoutPage)}
          />
          <Route path='/:categoryId' component={ComponentHOC(CategoryPage)} />
        </Switch>
      </div>
    );
  }
}

export const ComponentHOC = Component => ({ ...props }) => (
  <Suspense fallback={<SpinnerCycle />}>
    <Component {...props} />
  </Suspense>
);

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
