import React, { Component } from 'react';
import Weather from './Weather';
import Counter from './Counter';
import store from '../app/store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to react & redux test page</h3>
        <Weather />
        <hr></hr>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;