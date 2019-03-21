import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';
import Employee from './Components/Employee';
import NumberView from './Components/NumberView';


Person.defaultProps = {
  name: "Other",
  age: "unknown"
}

class App extends Component {
  // constructor(props){
  //   super(props);
  // }



  render() {
    const infoUser2 = { name: "User 2", age: "72" }
    return (
      <div className="App" id="App">
        <div>
          <i>1. ComponentWillMount()</i>
          <Person name="User 1" age="26"></Person>
          <br></br>
          <Person {...infoUser2}></Person>
          <br></br>
          <Person></Person>
        </div>
        <hr></hr>

        <div>
          <i>2. ComponentDidMount()</i>
          <Employee empId="1"></Employee>
        </div>
        <hr></hr>

        <div>
          <i>3. shouldComponentUpdate (props,nextState)</i>
          <NumberView></NumberView>
        </div>
      </div>
    );
  }
}

export default App;
