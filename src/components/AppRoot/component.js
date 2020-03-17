import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import requireAuth from '../../hoc/requireAuth';
import Header from '../Header';
import NotFound from '../../pages/NotFound';
import Home from '../../pages/Home';
import MyLists from '../../pages/MyLists';
import Movie from '../../pages/Movie';
import Watchlist from '../../pages/Watchlist';
import Favorites from '../../pages/Favorites';

const AppRoot = () => (
  <Router>
    <Header />

    <div className="main-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" component={requireAuth(Movie)} />
        <Route path="/my-lists" component={requireAuth(MyLists)} />
        <Route path="/watchlist" component={requireAuth(Watchlist)} />
        <Route path="/favorites" component={requireAuth(Favorites)} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRoot;
