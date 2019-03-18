import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Please click me!",
      clickCount: 0,
      searchText: "",
      searchCount: 0,
      lengthText: 0,
    }
    this.clickButton = this.clickButton.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.clickButtonSearch = this.clickButtonSearch.bind(this);
  }

  clickButton() {
    this.setState({
      text: "Click",
      clickCount: this.state.clickCount + 1
    });
  }

  onChangeSearch(event) {
    var text = event.target.value;
    this.setState({
      searchText: text
    });
  }

  clickButtonSearch() {
    this.setState({
      searchCount: this.state.searchCount + 1,
      lengthText: this.state.searchText.length
    });
  }

  render() {
    const info = { name: "TuNK", address: "Hai Duong", age: "27" }
    return (
      <div className="App">
        <div>
          <u><i>ReactJS props</i></u>
          <h2>Person Info</h2>
          <Person {...info}></Person>
        </div>
        <hr></hr>

        <div>
          <u><i>ReactJS state</i></u>
          <br></br><br></br>

          <button onClick={this.clickButton}>{this.state.text} : {this.state.clickCount}</button>
        </div>
        <hr></hr>

        <div>
          <u><i>ReactJS state (continue)</i></u>
          <br></br><br></br>

          <input type="text" onChange={this.onChangeSearch}></input>
          <button type="button" onClick={this.clickButtonSearch}>Search</button>
          <div>Search Text: <b>{this.state.searchText}</b></div>
          <div>Search Count:  <b>{this.state.searchCount}</b></div>
          <div>Length Text:  <b>{this.state.lengthText}</b></div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default App;