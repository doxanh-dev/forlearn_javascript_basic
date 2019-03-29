import React, { Component } from 'react';

class HistoryContainer extends Component {
    constructor(props){
        super(props);
        this.returnHome = this.returnHome.bind(this);
    }

    returnHome(event){
        event.preventDefault();
        this.props.history.replace({
            pathname: "/"
        });
    }

    render() {
        return (
            <div className="history">
                <h1>Danh sách thông tin sinh viên đăng ký lớp</h1>
                <div className="content">
                    <table className="ui selectable celled table">
                        <thead>
                            <tr>
                                <th className="center aligned">ID</th>
                                <th className="center aligned">Fullname</th>
                                <th className="center aligned">Address</th>
                                <th className="center aligned">Gender</th>
                                <th className="center aligned">Hobby</th>
                                <th className="center aligned">Notes</th>
                                <th className="center aligned" colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="8">Không có dữ liệu Sinh viên trong danh sách !</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <button type="submit" id="btn-back" className="ui whatsapp button" onClick={this.returnHome}>
                            <i className="reply icon"></i>
                            Trở về
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default HistoryContainer;