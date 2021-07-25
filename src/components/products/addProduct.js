import React, { Component } from 'react';
import * as mat from 'material-ui';
import './logo.css';

import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';
class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.loadUserRequest();
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            if (!this.props.application || !this.props.application.user) {
                browserHistory.push('/login');
            }
        }, 5)
    }

    handleSubmit(evt) {
        evt.preventDefault();
        var productName = this.refs.productName.getValue();
        var manufacturer = this.refs.manufacturer.getValue();
        var description = this.refs.description.getValue();
        var quantity = this.refs.quantity.getValue();
        var price = this.refs.price.getValue();
        var category = this.refs.category.getValue();
        var favourite = this.refs.category.getValue();
        var objectToSave = {
            uid: this.props.application.user.uid,
            userEmail: this.props.application.user.email,
            productName: productName,
            manufacturer: manufacturer,
            description: description,
            quantity: quantity,
            favourite: favourite,
            price: price,
            category: category,
            availability: true
        }
        console.log(objectToSave);
        console.log(this.props.application.user);
        this.props.addProductRequest(objectToSave);
    }


    render() {
        return (
            <div className="main-login-div">
                <mat.Card>
                    <mat.CardTitle title="Add New Product" />
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Product Info</h3>
                            <mat.Divider />
                            <mat.TextField
                                hintText="Test Product"
                                floatingLabelText="Product Name"
                                className="full-width-container"
                                ref="productName"
                                name="productName"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                            /><br />
                            <mat.TextField
                                hintText="Product Manufacturer"
                                floatingLabelText="Product Manufacturer"
                                className="full-width-container"
                                ref="manufacturer"
                                name="manufacturer"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                            /><br />
                            <mat.TextField
                                hintText="Product Description"
                                floatingLabelText="Product Description"
                                multiLine={true}
                                className="full-width-container"
                                rows={3}
                                rowsMax={3}
                                ref="description"
                                name="description"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                            /><br />
                            <mat.TextField
                                hintText="Product Quantity"
                                floatingLabelText="Product Quantity"
                                className="full-width-container"
                                ref="quantity"
                                name="quantity"
                                required={true}
                                type="number"
                                onChange={this.handleInputChange}
                            /><br />
                            <mat.TextField
                                hintText="Product Price"
                                floatingLabelText="Product Price"
                                className="full-width-container"
                                ref="price"
                                name="price"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                            />
                            <br/>
                            <mat.TextField
                                hintText="Product Category"
                                floatingLabelText="Product Category"
                                className="full-width-container"
                                ref="category"
                                name="category"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                            />
                            <br/>
                            <mat.TextField
                                hintText="Favourite"
                                floatingLabelText="Product Favourite"
                                className="full-width-container"
                                ref="favourite"
                                name="favourite"
                                required={true}
                                type="boolean"
                                onChange={this.handleInputChange}
                            /><br />

                            {/* <mat.InputLabel id="demo-simple-select-label">Category</mat.InputLabel>
                            <mat.Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                hintText="Category"
                                floatingLabelText="Category"
                                className="full-width-container"
                                ref="category"
                                name="category"
                                required={true}
                                onChange={this.handleInputChange}
                            >
                                <mat.MenuItem value={10}>Ten</mat.MenuItem>
                                <mat.MenuItem value={20}>Twenty</mat.MenuItem>
                                <mat.MenuItem value={30}>Thirty</mat.MenuItem>
                            </mat.Select> */}

                            <br />
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default AddProduct;