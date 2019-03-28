import React, {Component} from 'react';
import Menu from '../components/Menu';

class Home extends Component {

    render(){
        return (
            <div className="home">
                <h1>Quản lý thông tin sinh viên đăng ký lớp</h1>
                <Menu></Menu>
            </div>
        )
    }
}   
export default Home;