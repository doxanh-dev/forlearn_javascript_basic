import React, { Component } from 'react';

import './App.css';

const Person = (props) => {
  return (
    <div className="detail">
      <h3>Person {props.pNo}</h3>
      <ul>
        <li>Name: <b>{props.name}</b></li>
        <li>Age: <b>{props.age}</b></li>
      </ul>
    </div>
  )
}

//default
Person.defaultProps = {
  pNo: "default",
  name: "User default",
  age: "20"
}

//gui du lieu qua props
class App extends Component {
  render() {
    const info = { pNo: "1", name: "User 2", age: "25" }
    return (
      <div className="App">
        <h1>Person Info</h1>
        <Person pNo="1" name="User 1" age="22"></Person>
        <hr></hr>
        <Person {...info}></Person>
        <hr></hr>
        <Person></Person>
      </div>
    );
  }
}

export default App;
