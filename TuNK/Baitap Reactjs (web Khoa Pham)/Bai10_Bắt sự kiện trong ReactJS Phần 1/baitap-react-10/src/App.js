import React, { Component } from 'react';
import './App.css';
import OnClickComponent from './Component/OnClickComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Demo về bắt sự kiện trong ReactJs</h2>
        <OnClickComponent value="1">Sự kiên với demo 1</OnClickComponent>
        <hr></hr>
        <OnClickComponent value="2">Sự kiên với demo 2</OnClickComponent>
        <hr></hr>
      </div>
    );
  }
}

export default App;
