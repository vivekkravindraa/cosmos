import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomeComponent from './components/home-component/HomeComponent';

import './App.css';

export const customHistory = createBrowserHistory();

function App() {
  return (
      <Router history={customHistory}>
        <Switch>
          <Route path="/" component={HomeComponent} />
        </Switch>
      </Router>
  );
};

export default App;
