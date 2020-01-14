import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../Header';
import NotFound from '../../pages/NotFound';

const AppRoot = () => {
  return (
    <Router>
      <Header />

      <div className="main-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return <div className="container"><h2>Home</h2></div>;
};

const About = () => {
  return <div className="container"><h2>About</h2></div>;
};

export default AppRoot;
