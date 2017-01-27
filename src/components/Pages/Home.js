import React, { Component, PropTypes } from 'react';

class Home extends Component {
  render() {
    return (
      <h3>Heya</h3>
    )
  }
}

Home.propTypes = {
  title: PropTypes.string
};

export default Home;
