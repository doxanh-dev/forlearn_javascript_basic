import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostFormContainer from '../containers/PostFormContainer';
import PostFormContainerCon from '../containers/PostFormContainerCon';
import HistoryContainer from '../containers/HistoryContainer';
import PostFormOK from '../containers/PostFormOK';
import Home from '../containers/Home';

class Root extends Component {
    render() {
        return (
            <div className="ui container container">
                <Route exact path="/" component={Home} />
                <Route exact path="/postform" component={PostFormContainer} />
                <Route exact path="/postformcon" component={PostFormContainerCon} />
                <Route exact path="/history" component={HistoryContainer} />
                <Route exact path="/postformOk" component={PostFormOK} />
            </div>
        );
    }
}

export default Root;
