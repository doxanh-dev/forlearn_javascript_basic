import React, { Component } from 'react';

import './App.css';
import EventOfChild from './Components/EventOfChild';
import OrderDetail from './Components/OrderDetail';

class App extends Component {
  constructor(props) {
    super(props);
    var dateNow = new Date();
    this.state = {
      dateTime: dateNow.toString(),
      countParentClick: 0,
      detail: [
        { id: 1, productName: "IPhone X", price: 950, quantity: 0 },
        { id: 2, productName: "IPhone XS", price: 1000, quantity: 0 },
        { id: 3, productName: "IPhone XS MAX", price: 1100, quantity: 0 }
      ],
      total: 0
    }
    this.clickRefreshCurrentTime = this.clickRefreshCurrentTime.bind(this);
    this.ClickButtonOfChild = this.ClickButtonOfChild.bind(this);
    this.ClickAddQuantity = this.ClickAddQuantity.bind(this);
  }

  clickRefreshCurrentTime() {
    var dateNow = new Date();
    this.setState({
      dateTime: dateNow.toString()
    });
  }

  ClickButtonOfChild() {
    this.setState({
      countParentClick: this.state.countParentClick + 1,
    });
  }

  ClickAddQuantity(index){
    var data = this.state.detail;
    var total = this.state.total;
    data[index].quantity = this.state.detail[index].quantity + 1;
    total = this.state.total + this.state.detail[index].price;
    this.setState({
      detail: data,
      total: total
    });
  }

  OrderDetailRender() {
    const list = this.state.detail.map( (item,index) => {
      const orderInfo = { productName: item.productName, price: item.price, quantity: item.quantity }
      return (
        <OrderDetail key={item.id} {...orderInfo} ClickAddQuantity={()=> this.ClickAddQuantity(index)} />
      )
    });
    return list;
  }

  render() {
    return (
      <div className="App">
        <div>
          <i>1. ReactJS Events</i>
          <h3>ReactJS Event: onClick</h3>
          <div className="group">
            <h4>Current Time:</h4>
            <div>
              <span>{this.state.dateTime}</span>
              <br></br>
              <button onClick={this.clickRefreshCurrentTime}>Refresh Current Time</button>
            </div>
          </div>
        </div>
        <hr></hr>

        <div>
          <i>2. Event của Component con</i>
          <h3>Sự kiện của Component con gọi phương thức tại Component cha</h3>
          <div className="group">
            <div className="titleClick">
              <b>(Parent) Click: <span className="corlorClick"> {this.state.countParentClick}</span></b>
            </div>
            <EventOfChild ClickButtonOfChild={this.ClickButtonOfChild}></EventOfChild>
          </div>
        </div>
        <hr></hr>

        <div>
          <i>3. Vidu tong hop</i>
          
          <div className="group">
            {this.OrderDetailRender()}
            <div className="total">Total: <b>{this.state.total} USD</b></div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default App;
