import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllPostContainer extends Component {

    dataRender() {
        let list = this.props.data.listData.map(
            (x, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{x.fullname}</td>
                        <td>{x.address}</td>
                        <td>{x.content}</td>
                        <td>
                            <button>Edit</button>
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                )
            }
        );
        return list;
    }

    render() {
        return (
            <div className="listSV">
                <h3>Danh sách sinh viên</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th width="50">ID</th>
                            <th width="150">Fullname</th>
                            <th width="180">Address</th>
                            <th width="400">Content</th>
                            <th colSpan="2" width="">Action</th>
                        </tr>
                        {this.dataRender().length > 0 ? this.dataRender() : <tr><td colSpan="6" className="color-nodata">Không có dữ liệu Sinh viên trong danh sách !</td></tr>}
                    </thead>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
};

export default connect(mapStateToProps, null)(AllPostContainer);