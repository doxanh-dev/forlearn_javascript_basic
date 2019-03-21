import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        { id: 1, name: "User 1", address: "Hue", mail: "user1@gmail.com" },
        { id: 2, name: "User 2", address: "Da Nang", mail: "user2@gmail.com" },
        { id: 3, name: "User 3", address: "HCM", mail: "user3@gmail.com" },
        { id: 4, name: "User 4", address: "Ninh Binh", mail: "user4@gmail.com" },
      ]
    };
  }

  showInfos() {
    let listInfo = this.state.info.map(
      info => {
        return (
          <li key={info.id}>
            <div>Name: <b>{info.name}</b></div>
            <div>Address: <b>{info.address}</b></div>
            <div>Mail: <b>{info.mail}</b></div>
          </li>
        )
      });
    return listInfo;
  }

  render() {
    return (
      <div className="App">
        <div>
          <i>React Lists</i>
          <ul>
            <h4>User Info</h4>
            {this.showInfos()}
          </ul>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default App;
