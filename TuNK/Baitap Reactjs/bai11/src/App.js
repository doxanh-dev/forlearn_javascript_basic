import React, { Component } from 'react';
import './App.css';
import { convertArrToString } from './Convert.js';
import { convertStringToArray } from './Convert.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        fullname: "",
        class: "",
        gender: "",
        hobby: [],
        content: ""
      },
      hobby: [
        { value: "1", label: "Music" },
        { value: "2", label: "Sport" },
        { value: "3", label: "Picnic" },
        { value: "4", label: "Other" },
      ]
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeText(event) {
    var newData = this.state.result;
    var target = event.target;
    var name = target.name;
    newData[name] = target.value;
    this.setState({
      result: newData
    });
  }

  onSubmitForm(event) {
    var data = this.state.result;
    data.hobby = convertArrToString(data.hobby);
    alert("Fullname: " + data.fullname + "\nClass: " + data.class + "\nGender: " + data.gender + "\nHobby: " + data.hobby + "\nContent: " + data.content);
    data.hobby = convertStringToArray(data.hobby);
    event.preventDefault();
  }

  onChangeCheckbox(event, value) {
    var index = this.state.result.hobby.indexOf(value);
    const result = this.state.result;
    if (index > -1) {
      let newArr = result.hobby.filter(e => e !== value);
      result[event.target.name] = newArr;
    }
    else {
      let newArr = result.hobby.concat(value);
      result[event.target.name] = newArr;
    }
    this.setState({ result: result });
  }

  checkboxRender() {
    const multiCheckbox = this.state.hobby.map(object => {
      return (
        <label key={object.value}>
          <input type="checkbox"
            name="hobby"
            value={object.value}
            onChange={event => this.onChangeCheckbox(event, object.value)}
            checked={this.state.result.hobby.indexOf(object.value) > -1 ? true : false}
          />
          {object.label}
        </label>
      )
    });
    return multiCheckbox;
  }

  render() {
    return (
      <div className="App">
        <i>ReactJS Form</i>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <div><label className="title">Fullname</label></div>
            <div className="result-style">
              <input type="text" name="fullname" value={this.state.result.fullname} onChange={this.onChangeText}></input>
            </div>
          </div>
          <div>
            <div><label className="title">Class</label></div>
            <div className="result-style">
              <select name="class" onChange={this.onChangeText} value={this.state.result.class}>
                <option value="CNTT1">CNTT1</option>
                <option value="CNTT2">CNTT2</option>
                <option value="CNTT3">CNTT3</option>
                <option value="CNTT4">CNTT4</option>
              </select>
            </div>
          </div>
          <div>
            <div><label className="title">Gender</label></div>
            <div className="result-style">
              <label>
                <input type="radio" name="gender" value="male" onChange={this.onChangeText} checked={this.state.result.gender === "male" ? true : false} />Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" onChange={this.onChangeText} checked={this.state.result.gender === "female" ? true : false} />Female
              </label>
            </div>
          </div>
          <div>
            <div><label className="title">hobby</label></div>
            <div className="result-style">
              {this.checkboxRender()}
            </div>
          </div>
          <div>
            <div><label className="title">Content</label></div>
            <div className="result-style">
              <textarea rows="5" cols="10" name="content" value={this.state.result.content} onChange={this.onChangeText}></textarea>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;