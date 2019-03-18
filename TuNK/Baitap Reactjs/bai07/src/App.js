import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.clickRandom = this.clickRandom.bind(this);
    this.clickFindRootNode = this.clickFindRootNode.bind(this);
  }

  clickRandom(){
    this.forceUpdate();
  }

  clickFindRootNode(){
    // khi click button Find Root Node thì sẽ trả về DOM của nút gốc,
    // giả định style của nút gốc sẽ đc set lại
    var node = ReactDOM.findDOMNode(this);
    node.style.border = "1px solid red";
    node.style.backgroundColor ="#f4f2f2";
  }

  render() {
    return (
      <div className="App">
        <div className="group1">
          <i>1. forceUpdate()</i>
          <div>
            <button onClick={this.clickRandom}>Click Random</button>
            <div>Random Value: {Math.random()}</div>
          </div>
        </div>

        <hr></hr>
        <div>
          <i>2. ReactDOM.findDOMNode()</i>
          <div>
            <a href="">Reset</a>
          </div>
          <button onClick={this.clickFindRootNode}>Find Root Node</button>
        </div>
      </div>
    );
  }
}

export default App;
