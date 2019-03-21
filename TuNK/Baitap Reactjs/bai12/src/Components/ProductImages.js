import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from "react-router-dom";

import ProductImages1 from '../Components/ProductImages1';
import ProductImages2 from '../Components/ProductImages2';
import ProductImages3 from '../Components/ProductImages3';

class ProductImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        };
        this.clickLink = this.clickLink.bind(this);
    }

    clickLink() {
        this.setState({
            check: true,
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h3>Some Images of Iphone XS</h3>
                    <Link to="/images/image1" onClick={this.clickLink}>Image1</Link>
                    <Link to="/images/image2" onClick={this.clickLink}>Image2</Link>
                    <Link to="/images/image3" onClick={this.clickLink}>Image3</Link>
                    {this.state.check === true ?
                        <div>
                            <Route exact path="/images/image1" component={ProductImages1} />
                            <Route exact path="/images/image2" component={ProductImages2} />
                            <Route exact path="/images/image3" component={ProductImages3} />
                        </div>
                        : <p><i>Please select a image.</i></p>
                    }


                </div>
            </BrowserRouter>
        )
    };
}

export default ProductImages;