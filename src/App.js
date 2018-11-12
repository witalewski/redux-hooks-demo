import React, { Component } from 'react';
import CounterWithoutHooks from './CounterWithoutHooks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterWithoutHooks />
      </div>
    );
  }
}

export default App;
