import React, { Component } from 'react';
import { Link } from 'react-router';
import auth from '../config/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: auth.loggedIn()
    }
  }

  getMenuMarkup(isLoggedIn) {
    if (isLoggedIn) {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/game">PLAY</Link></li>
          <li><Link to="/leaders/wins-leaders">High Scores</Link></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      )
    } else {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/leaders/wins-leaders">High Scores</Link></li>
          <li><a href="#login">Login</a></li>
        </ul>
      )
    }
  }

  render() {

    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <Link to="/" className="brand-logo">Rick Tac Toe</Link>
                {this.getMenuMarkup(this.state.isLoggedIn)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;