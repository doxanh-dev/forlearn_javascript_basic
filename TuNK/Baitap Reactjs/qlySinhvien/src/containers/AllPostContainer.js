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
                    </tr>
                )
            }
        );
        return list;
    }

    render() {
        //console.log("dlist: "+ JSON.stringify(this.props.listData.listData))
        return (
            <div className="listSV">
                <h3>Danh sách sinh viên</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th width="100">ID</th>
                            <th width="200">Fullname</th>
                            <th width="200">Address</th>
                            <th>Content</th>
                        </tr>
                        {this.dataRender().length > 0 ? this.dataRender() : <tr><td colSpan="4" className="color-nodata">Khong co du lieu!</td></tr>}
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