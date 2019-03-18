import React from 'react';

class OrderDetail extends React.Component {
    render(){
        return (
            <div className="order-detail">
                <h3>{this.props.productName}</h3>
                <p>Price: {this.props.price}</p>
                <p>Quantity: {this.props.quantity}</p>
                <p>
                    <button onClick={this.props.ClickAddQuantity}>Add Quantity</button>
                </p>
            </div>
        )
    };
}

export default OrderDetail;