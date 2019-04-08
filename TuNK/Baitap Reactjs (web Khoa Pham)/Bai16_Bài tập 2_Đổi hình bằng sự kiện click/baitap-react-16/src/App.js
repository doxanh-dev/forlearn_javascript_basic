import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index : 1
    }
    this.Next = this.Next.bind(this);
    this.Prev = this.Prev.bind(this);
  }

  Next(){
    if(this.state.index < 7){
      this.setState({
        index: parseInt(this.state.index) + 1
      });
    }
  }

  Prev(){
    if(this.state.index > 1){
      this.setState({
        index: parseInt(this.state.index) - 1
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Bài tập đổi hình bằng sự kiện onclick</h2>
        <div className="content">
          <img src={require(`./images/${this.state.index}.jpg`)} width="250" height="250" alt=" error"></img>
          <hr></hr>
          <button onClick={this.Next}>Tiếp theo</button>
          <button onClick={this.Prev}>Quay lại</button>
        </div>
      </div>
    );
  }
}

export default App;
