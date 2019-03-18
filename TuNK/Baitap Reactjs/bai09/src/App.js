import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        nameValue: "",
        ageValue: "",
      },
      error: {
        errorName: "",
        errorAge: ""
      }
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.nameRef = React.createRef();
    this.ageRef = React.createRef();
  }

  onChangeText(event) {
    let newData = this.state.value;
    const target = event.target;
    const name = target.name;
    newData[name] = target.value;
    this.setState({ value: newData });
  }

  clickButton() {
    let value = this.state.value;
    var count = 0;

    if (value.nameValue.length < 6 || value.nameValue === "") {
      var nodeName = this.nameRef.current;
      this.setState((prevState, props) => {
        return {
          value: {
            nameValue: "",
            ageValue: this.state.value.ageValue
          },
          error: {
            errorName: "Ten khong thoa man dieu kien so ky tu tu 6 tro len",
            errorAge: prevState.error.errorAge
          }
        };
      });
      nodeName.focus();
      nodeName.style.border = "1px solid #ff0000";
      count++;
    }
    else {
      this.setState((prevState, props) => {
        return {
          error: {
            errorName: "",
            errorAge: prevState.error.errorAge
          }
        };
      });
      this.nameRef.current.style.border = "1px solid #a9a9a9";
    }

    if (isNaN(value.ageValue) || value.ageValue === "") {
      var nodeAge = this.ageRef.current;
      this.setState((prevState, props) => {
        return {
          value: {
            nameValue: prevState.value.nameValue,
            ageValue: ""
          },
          error: {
            errorName: prevState.error.errorName,
            errorAge: "Tuoi phai nhap la so"
          }
        };
      });
      nodeAge.focus();
      nodeAge.style.border = "1px solid #ff0000";
      count++;
    }
    else {
      this.setState((prevState, props) => {
        return {
          error: {
            errorName: prevState.error.errorName,
            errorAge: ""
          }
        };
      });
      this.ageRef.current.style.border = "1px solid #a9a9a9";
    }

    //check neu khong co loi nhap 2 input thi` set gia tri cua error la ""
    if (count === 0) {
      this.setState({
        error: {
          errorName: "",
          errorAge: ""
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <i>1. React Refs</i>
          <table>
            <tr>
              <th>Name:</th>
              <td>
                <input type="text" name="nameValue" value={this.state.value.nameValue} ref={this.nameRef} onChange={this.onChangeText}></input>
              </td>
            </tr>
            <tr>
              <th>Age:</th>
              <td>
                <input type="text" name="ageValue" value={this.state.value.ageValue} ref={this.ageRef} onChange={this.onChangeText} maxLength="2"></input>
              </td>
            </tr>
          </table>
          {this.state.error.errorName !== "" ?
            <div>
              <span className="error">{this.state.error.errorName}</span>
            </div>
            : ""}
          {this.state.error.errorAge !== "" ?
            <div>
              <span className="error">{this.state.error.errorAge}</span>
            </div>
            : ""}
          <button onClick={this.clickButton}>Click button</button>
        </div>
      </div>
    );
  }
}

export default App;