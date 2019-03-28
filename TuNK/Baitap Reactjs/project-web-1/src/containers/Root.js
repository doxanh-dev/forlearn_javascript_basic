import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostFormContainer from '../containers/PostFormContainer';
import HistoryContainer from '../containers/HistoryContainer';
import Home from '../containers/Home';

class App extends Component {
    render() {
        return (
            <div className="ui container container">
                <Route exact path="/" component={Home} />
                <Route exact path="/postform" component={PostFormContainer} />
                <Route exact path="/history" component={HistoryContainer} />
            </div>
        );
    }
}

export default App;
