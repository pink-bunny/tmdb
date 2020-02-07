import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import requireAuth from '../../hoc/requireAuth';
import Header from '../Header';
import NotFound from '../../pages/NotFound';
import Home from '../../pages/Home';
import MyLists from '../../pages/MyLists';

const AppRoot = () => (
  <Router>
    <Header />

    <div className="main-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/my-lists" component={requireAuth(MyLists)} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRoot;
