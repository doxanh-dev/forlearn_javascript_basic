import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.clickButon = this.clickButon.bind(this);
  }

  clickButon() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Demo về state trong React</h2>
        <div className="count-click">
          <p>Số lượt click: <span>{this.state.count}</span></p>
          <button onClick={this.clickButon}>Click button</button>
        </div>
      </div>
    );
  }
}

export default App;
