import React from 'react';

const App = ({ title }) => {
  return (
    <h2>{title}</h2>
  );
};

App.propTypes = {
  title: React.PropTypes.string
};

export default App;
