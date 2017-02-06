import React, { Component, PropTypes } from 'react';
import GameBoard from '../GameBoard';

class Game extends Component {
  render() {
    return (
      <GameBoard />
    )
  }
}

Game.propTypes = {
  title: PropTypes.string
};

export default Game;
