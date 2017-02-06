import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import Header from './Header';

class App extends Component {
  componentDidMount() {
    axios.get('/api/user/danf')
      .then((response) => {
        console.log('response:' + response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div id="app">
        <Header />
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
