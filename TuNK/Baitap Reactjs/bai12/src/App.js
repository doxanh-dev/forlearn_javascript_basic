import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import ProductFeature from './Components/ProductFeature';
import ProductImages from './Components/ProductImages';

import ProductComments from './Components/ProductComments';
import ProductShortInfo from './Components/ProductShortInfo';

import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <i>React Router</i>
            <ProductShortInfo />
            <div className="link">
              <Link to="/">Feature</Link>
              <Link to="/images">Images</Link>
              <Link to="/comments">Comments</Link>
            </div>
            <div className="content">
              <Route exact path="/" component={ProductFeature} />
              <Route exact path="/images" component={ProductImages} />
              <Route exact path="/comments" component={ProductComments} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
