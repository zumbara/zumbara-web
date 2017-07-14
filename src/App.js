// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './routes/Home';

const App = () =>
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>;

export default App;
