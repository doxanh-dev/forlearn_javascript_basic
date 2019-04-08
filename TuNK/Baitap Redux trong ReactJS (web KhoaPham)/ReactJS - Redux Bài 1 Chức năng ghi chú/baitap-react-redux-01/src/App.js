import React, { Component } from 'react';
import './App.css';
import List from './Components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Chức năng cho ghi chú trên React</h2>
        <List></List>
      </div>
    );
  }
}

export default App;
