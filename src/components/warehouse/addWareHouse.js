import React, { Component } from 'react';
import * as mat from 'material-ui';


import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';
class AddWarehouse extends Component {

    constructor(props){
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
        var warehouseName = this.refs.warehouseName.getValue();
        var managerName = this.refs.managerName.getValue();
        var cellNumber = this.refs.cellNumber.getValue();
        var email = this.refs.email.getValue();
       
        var city = this.refs.city.getValue();
        var objectToSave = {
            uid : this.props.application.user.uid,
            userEmail : this.props.application.user.email,
            warehouseName : warehouseName,
            managerName : managerName,
            city:city,
            email:email,
            cellNumber : cellNumber,
         
         
            availability : true
        }
        console.log(objectToSave);
        console.log(this.props.application.user);
        console.log(this.props.addWarehouseRequest)
        this.props.addWarehouseRequest(objectToSave);
    }


    render() {
        return (
            <div className="main-login-div">
                <mat.Card>
                    <mat.CardTitle title="Add New Warehouse" />
                    <mat.CardText>
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Warehouse Info</h3>
                            <mat.Divider />
                            <mat.TextField
                                hintText="WareHouse Name"
                                floatingLabelText="WareHouse Name"
                                className="full-width-container"
                                ref="warehouseName"
                                name="warehouseName"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                                <mat.TextField
                                hintText="City Name"
                                multiLine={false}
                                className="full-width-container"
                                rows={3}
                                rowsMax={3}
                                ref="city"
                                name="city"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                         
                          <mat.TextField
                                hintText="Manager Name"
                                floatingLabelText="Manager Name"
                                className="full-width-container"
                                ref="managerName"
                                name="managerName"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                                     <mat.TextField
                                hintText="1231121234"
                                floatingLabelText="Cell Number"
                                className="full-width-container"
                                ref="cellNumber"
                                name="cellNumber"
                               
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                                   <mat.TextField
                                hintText="test@test.com"
                                floatingLabelText="Email"
                                className="full-width-container"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                                onChange={this.handleInputChange}
                                /><br />
                        
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default AddWarehouse;