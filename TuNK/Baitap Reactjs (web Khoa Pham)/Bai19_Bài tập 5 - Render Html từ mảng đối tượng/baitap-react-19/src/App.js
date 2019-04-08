import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        { id: 1, srcImage: "./images/1.jpg", name: "Thanh Cong", age: 25, address: "Da Nang" },
        { id: 2, srcImage: "./images/2.jpg", name: "Hoang Dat", age: 30, address: "Ho Chi Minh" },
        { id: 3, srcImage: "./images/3.jpg", name: "Huy Hoang", age: 20, address: "Nam Dinh" }
      ]
    }
    this.AddUser = this.AddUser.bind(this)
  }

  AddUser() {
    if (this.state.array.length !== 7) {
      this.state.array.push({ id: this.state.array.length + 1, srcImage: "./images/" + (this.state.array.length + 1) + ".jpg", name: "Hong Ha", age: 29, address: "Hue" });
      this.setState(this.state);
    }
  }

  showInfo() {
    const info = this.state.array.map(object => {
      return (
        <ul key={object.id}>
          <li>
            <img src={require(`${object.srcImage}`)} height="150" width="150" alt=""></img>
          </li>
          <li>
            Name: <span>{object.name}</span>
          </li>
          <li>
            Age: <span>{object.age}</span>
          </li>
          <li>
            Address: <span>{object.address}</span>
          </li>
        </ul>
      )
    });
    return info;
  }

  render() {
    return (
      <div className="App">
        <h2>Thông tin người dùng</h2>
        <div className="content">
          <button onClick={this.AddUser}>Add user</button>
          <br></br>
          {this.showInfo()}
        </div>
      </div>
    );
  }
}

export default App;
