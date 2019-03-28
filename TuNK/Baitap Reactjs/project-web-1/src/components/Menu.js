import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <ul className="o-container_unit">
                <li className="m-action_item">
                    <Link to="/postform" className="a-btn-menu">PostFormContainer</Link>
                </li>
                <li className="m-action_item">
                    <Link to="/history" className="a-btn-menu">HistoryContainer</Link>
                </li>
            </ul>
        )
    }
}
export default Menu;