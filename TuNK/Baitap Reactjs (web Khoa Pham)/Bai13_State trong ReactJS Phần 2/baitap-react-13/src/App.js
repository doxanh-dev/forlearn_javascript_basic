import React, { Component } from 'react';
import './App.css';
import CountClick from './Component/CountClick'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Demo về state trong Reactjs phần 2</h2>
        <div>
          <CountClick countclick="0">Click button trong Component con</CountClick>
        </div>
      </div>
    );
  }
}

export default App;
