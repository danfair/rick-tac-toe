import React, { Component, PropTypes } from 'react';

class About extends Component {
  render() {
    return (
      <h3>About Page</h3>
    )
  }
}

About.propTypes = {
  title: PropTypes.string
};

export default About;
