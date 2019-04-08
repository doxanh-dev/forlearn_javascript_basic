import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    this.setState({
      index: (this.state.index % 13) + 1
    });
  }

  componentDidMount() {
    setInterval(this.changeImage, 1000);
  }

  render() {
    return (
      <div className="App">
        <h2>Bài tập đổi hình bằng setInterval</h2>
        <div className="content">
          <img src={require(`./images/${this.state.index}.jpg`)} width="250" height="250" alt=" error"></img>
        </div>
      </div>
    );
  }
}

export default App;
