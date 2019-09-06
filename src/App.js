import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import CollectionPage from './pages/collection-page/collection-page.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:categoryId' component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;
