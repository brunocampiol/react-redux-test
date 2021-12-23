import React, { Component } from 'react';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div>
          <h3>Welcome to react & redux test page</h3>
          <Weather />
      </div>
    );
  }
}

export default App;