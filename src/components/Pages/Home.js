import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Heya</h3>
        <Link to="/leaders/wins-leaders">
          About
        </Link>
        <br />
        <a href="/login/twitter">Sign in with Twitter</a>
      </div>
    )
  }
}

Home.propTypes = {
  title: PropTypes.string
};

export default Home;
