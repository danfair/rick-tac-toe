import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import GamePreview from '../GamePreview';
import LoginOrPlay from '../LoginOrPlay';

class Home extends Component {
  render() {
    return (
      <div>
        <GamePreview />
        <LoginOrPlay />
      </div>
    )
  }
}

Home.propTypes = {
  title: PropTypes.string
};

export default Home;
