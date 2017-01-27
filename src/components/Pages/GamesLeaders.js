import React, { Component, PropTypes } from 'react';

class GamesLeaders extends Component {
  render() {
    return (
      <h3>GamesLeaders Page</h3>
    )
  }
}

GamesLeaders.propTypes = {
  title: PropTypes.string
};

export default GamesLeaders;
