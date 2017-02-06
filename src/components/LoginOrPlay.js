import React, {Component} from 'react';
import auth from '../config/auth';
import { Link } from 'react-router';

class LoginOrPlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: auth.loggedIn()
    };
  }

  render() {
    return (
      <div className="row">
          {this.state.isLoggedIn ? (
            <div className="col s12 center-align">
              <h3>Play now!</h3>
              <Link to="/game" className="waves-effect waves-light btn">Play</Link>
            </div>
          ) : (
            <div className="col s12 center-align">
              <h3>Login to play</h3>
              <a className="waves-effect waves-light btn facebook-blue">Facebook</a>
              <a href="/auth/twitter" className="waves-effect waves-light btn twitter-blue">Twitter</a>
            </div>
          )}
      </div>
    );
  }
}

export default LoginOrPlay;