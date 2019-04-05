import React, { Component } from 'react';
import './App.css';

const Props = (props) => {
  return (
    <div>
      <div>Programs trainning Reactjs on link web <i><u>{props.link}</u></i></div>
      <p><i>{props.children}</i></p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Demo về props trong Reactjs</h2>
        <Props link="KhoaPham">Day la props Children</Props>
        <hr></hr>
      </div>
    );
  }
}

export default App;
