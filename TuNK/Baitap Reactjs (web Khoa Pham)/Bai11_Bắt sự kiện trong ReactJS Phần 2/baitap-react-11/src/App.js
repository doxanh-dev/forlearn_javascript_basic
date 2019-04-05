import React, { Component } from 'react';
import './App.css';
import OnClickComponent from './Component/OnClickComponent'

class App extends Component {
  OnClickButton(value) {
    alert(value);
  }
  render() {
    return (
      <div className="App">
        <h2>Demo về bắt sự kiện trong ReactJs</h2>
        <OnClickComponent value="1" OnClickButton={this.OnClickButton.bind(this)}>Sự kiên với demo 1</OnClickComponent>
        <hr></hr>
        <OnClickComponent value="2" OnClickButton={this.OnClickButton.bind(this)}>Sự kiên với demo 2</OnClickComponent>
        <hr></hr>
      </div>
    );
  }
}

export default App;
