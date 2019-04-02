import React, { Component } from 'react';

class PostFormOK extends Component {
    constructor(props) {
        super(props);
        this.returnHome = this.returnHome.bind(this);
    }

    returnHome(event) {
        event.preventDefault();
        this.props.history.replace({
            pathname: "/"
        });
    }

    render() {
        return (
            <div className="post-form-ok">
                <h1>Thông tin sinh viên đã được thêm !!!</h1>
                <div>
                    <button type="submit" className="ui whatsapp button" onClick={this.returnHome}>
                        <i className="reply icon"></i>
                        &nbsp; Trở về
                    </button>
                </div>
            </div>
        )
    }
}
export default PostFormOK;