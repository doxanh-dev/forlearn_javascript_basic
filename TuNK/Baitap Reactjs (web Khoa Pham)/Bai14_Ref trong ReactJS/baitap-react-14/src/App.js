import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.showMessage = this.showMessage.bind(this);
    this.inputRefs = React.createRef();
    this.selectRefs = React.createRef();
  }

  showMessage() {
    var inputText = this.inputRefs.current;
    var selectText = this.selectRefs.current;
    alert("Thong tin: \nValueInput: " + inputText.value + "\nValueInput: " + selectText.value)
  }

  render() {
    return (
      <div className="App">
        Input: <input type="text" ref={this.inputRefs}></input>
        <br></br>
        Select: <select ref={this.selectRefs}>
          <option value="">---</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
        </select>
        <br></br>
        <button onClick={this.showMessage}>Hien thi</button>
      </div>
    );
  }
}

export default App;
