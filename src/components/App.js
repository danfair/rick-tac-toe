import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('/user/danf')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('App mounted');
  }

  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};

export default App;
