import React, { Component, PropTypes } from 'react';

class Game extends Component {
  render() {
    return (
      <h3>Game Page</h3>
    )
  }
}

Game.propTypes = {
  title: PropTypes.string
};

export default Game;
