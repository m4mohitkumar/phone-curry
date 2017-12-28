import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';

class MainRoute extends Component {
  render() {
    return (
      <HashRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </HashRouter>
    );
  }
}

export default MainRoute;
