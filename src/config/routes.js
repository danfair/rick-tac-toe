import React from 'react';
import App from '../components/App';
import About from '../components/Pages/About';
import Home from '../components/Pages/Home';
import Game from '../components/Pages/Game';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';
import WinsLeaders from '../components/Pages/WinsLeaders';
import WinPercentageLeaders from '../components/Pages/WinPercentageLeaders';
import GamesLeaders from '../components/Pages/GamesLeaders';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='game' component={Game} />
      <Route path='/leaders' component={WinsLeaders}>
        <Route path="wins-leaders" component={WinsLeaders} />
        <Route path="win-percentage-leaders" component={WinPercentageLeaders} />
        <Route path="games-played-leaders" component={GamesLeaders} />
      </Route>
      <Route path='about' component={About} />
    </Route>
  </Router>
);

module.exports = routes;
