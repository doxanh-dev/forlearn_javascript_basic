import React, { Component } from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            empId: undefined,
            fullname: undefined
        };
        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        setTimeout(() => {
            this.setState({
                loaded: true,
                empId: this.props.empId,
                fullname: "Employeer"
            });
        }, 2000);
    }

    componentDidMount() {
        //sau khi Component dc render lên giao diện 1 lần thì sẽ gọi hàm componentDidMount()
        this.loadData();
    }

    render() {
        if (this.state.loaded === true) {
            return (
                <div className="group2">
                    <p>EmpId: <b>{this.state.empId}</b></p>
                    <p>Fullname: <b>{this.state.fullname}</b></p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>
                        Hãy đợi trong khi load dữ liệu. EmpID: <b>{this.props.empId}</b>
                    </p>
                </div>
            );
        }
    }
}

export default Employee;