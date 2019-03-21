import React, { Component } from 'react';
import './App.css';
import PostFormContainer from './containers/PostFormContainer';
import AllPostContainer from './containers/AllPostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Quản lý sinh viên</h1>
        <PostFormContainer></PostFormContainer>
        <AllPostContainer></AllPostContainer>
      </div>
    );
  }
}

export default App;
