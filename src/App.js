import React, { Component } from 'react';
import { CounterWithHooks } from './CounterWithHooks'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterWithHooks />
      </div>
    );
  }
}

export default App;
