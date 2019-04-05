import React, { Component } from 'react';
import './App.css';
import PersonComponent from './Component/PersonComponent';

const Person = (props) => {
  return (
      <ul>
        <li><b>Name:</b> {props.name}</li>
        <li><b>Age:</b> {props.age}</li>
        <li><b>Address:</b> {props.address}</li>
      </ul>
  )
}

Person.defaultProps = {
  name: "Phan Anh",
  age: "20",
  address: "Ha Noi"
};

class App extends Component {
  render() {
    const info = {name: "Hoang Dung", age:"25", address:"Quang Binh"}
    return (
      <div className="App">
        <h2>Thông tin Person</h2>
        <Person name="Kieu Oanh" age="23" address="Da Nang"></Person>
        <hr></hr>
        <Person {...info}></Person>
        <hr></hr>
        <Person></Person>
        <hr></hr>
        <PersonComponent name="Tran Dat" age="28" address="Binh Dinh"></PersonComponent>
        <hr></hr>
      </div>
    );
  }
}

export default App;
