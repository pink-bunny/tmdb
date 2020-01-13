import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './stylesheets/application.scss';

import Header from './components/Header';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Header />

      <div className="main-body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return <div className="container"><h2>Home</h2></div>;
};

function About() {
  return <div className="container"><h2>About</h2></div>;
};

ReactDOM.render(<App />, document.getElementById('app'));
