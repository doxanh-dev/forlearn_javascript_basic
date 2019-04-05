import React, { Component } from 'react';
import './App.css';
import PropsComponent from './Component/PropsComponent';

const Props = (props) => {
  return (
    <div>Programs trainning Reactjs on link web <i><u>{props.link}</u></i></div>
  )
}

class App extends Component {
  render() {
    const link = { ten: "KhoaPham" }
    return (
      <div className="App">
        <h2>Demo về props trong Reactjs</h2>
        <Props link="KhoaPham"></Props>
        <hr></hr>
        <PropsComponent {...link}></PropsComponent>
        <hr></hr>
      </div>
    );
  }
}

export default App;
