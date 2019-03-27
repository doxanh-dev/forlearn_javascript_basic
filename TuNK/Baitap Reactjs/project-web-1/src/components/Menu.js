import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className={`${this.props.container} container`}>
                <ul>
                    <li>
                        <Link to="/postform">PostFormContainer</Link>
                    </li>
                    <li>
                        <Link to="/history">HistoryContainer</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Menu;