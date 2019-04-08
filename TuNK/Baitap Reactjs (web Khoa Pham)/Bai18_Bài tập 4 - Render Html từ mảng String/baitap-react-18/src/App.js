import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        { id: 1, name: "Thanh Cong", age: 25, address: "Da Nang" },
        { id: 2, name: "Hoang Dat", age: 30, address: "Ho Chi Minh" },
        { id: 3, name: "Huy Hoang", age: 20, address: "Nam Dinh" }
      ]
    }
  }

  showInfo() {
    const info = this.state.array.map(object => {
      return (
        <ul key={object.id}>
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
          {this.showInfo()}
        </div>
      </div>
    );
  }
}

export default App;
