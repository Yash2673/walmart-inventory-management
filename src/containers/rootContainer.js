import React, { Component } from 'react';
import { logOutRequest } from '../store/actions/logout';
import { connect } from 'react-redux';
import { loadUserRequest } from '../store/actions/loadUserData';
import { childAddedHandler } from '../store/actions/childAddedHandler';

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
import logo from './logoss.png';
import { collisionVelocity } from 'tsparticles/Utils';


class rootContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, isAdmin: false };
    }

    handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };

    gotoDashoard = () => {
        const user = JSON.parse(localStorage.getItem("inventoryUserData"));
        this.setState({ open: !this.state.open })
        if (user.manager === "Store")
            browserHistory.push('/dashboard');
        else
            browserHistory.push('/viewWarehouses');
    };


    gotoAvailable = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addReport');
    };

    gotoAddSales = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addSales');
    };

    gotoAddStores = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addStore');
    };

    gotoViewStores = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewStores');
    };

    gotoWarehouses = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewWarehouses');
    };

    gotoComplains = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/myIncidents');
    };

    viewProducts = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewProducts');
    };

    gotoViewSales = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewSales');
    };

    viewPurchase = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewPurchase');
    };

    componentDidMount() {
        this.props.loadUserRequest();
    }

    componentWillReceiveProps() {
        // setTimeout(() => {
        //     if (!this.props.application || !this.props.application.user) {
        //         browserHistory.push('/login');
        //     }else if(this.props.application && this.props.application.user && this.props.application.user.isAdmin){
        //         this.setState({isAdmin:true});
        //     }
        // }, 5)
    }

    addProduct = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addProduct');
    }
    addWarehouse = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addWareHouse');
    }

    addPurchase = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/addPurchase');
    }


    logOutRequest = () => {
        this.setState({ open: !this.state.open });
        this.props.logOutRequest();
    }

    render() {
        const user = JSON.parse(localStorage.getItem("inventoryUserData"));
        return (
            <div  >
                <div >
                    <mat.AppBar position="center"

                        onLeftIconButtonTouchTap={this._handleClick}

                    ><div className='title'>Prayas Inventory</div></mat.AppBar>
                    <div >
                        <mat.Drawer open={this.state.open}
                            docked={false}
                            onRequestChange={(open) => this.setState({ open })}

                        > <div >
                                {
                                    user.manager === "Store" ?

                                        <div className="navbar">
                                            <mat.MenuItem disabled className="disbaledImage"><img src={logo} className="logoImage" /></mat.MenuItem>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.gotoDashoard}>Dashboard</mat.MenuItem></div>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.addProduct}>Add Product</mat.MenuItem></div>
                                            <div className='menuitem'>  <mat.MenuItem onTouchTap={this.gotoAddStores}>Add Stores</mat.MenuItem></div>
                                            <div className='menuitem'>  <mat.MenuItem onTouchTap={this.gotoAddSales}>Add Sales</mat.MenuItem></div>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.addPurchase}>Add Purchases</mat.MenuItem></div>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.gotoViewStores}>View Stores</mat.MenuItem></div>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.gotoViewSales}>View Sales</mat.MenuItem></div>
                                            <div className='menuitem'>  <mat.MenuItem onTouchTap={this.viewPurchase}>View Purchases</mat.MenuItem></div>
                                            <div className='menuitem'>  <mat.MenuItem onTouchTap={this.gotoWarehouses}>View Warehouse</mat.MenuItem></div>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.logOutRequest}>Logout</mat.MenuItem></div>
                                        </div>
                                        :
                                        <div className="navbar">
                                            <mat.MenuItem disabled className="disbaledImage"><img src={logo} className="logoImage" /></mat.MenuItem>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.gotoDashoard}>Dashboard</mat.MenuItem></div>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.addWarehouse}>Add Warehouse</mat.MenuItem></div>
                                            <div className='menuitem'> <mat.MenuItem onTouchTap={this.logOutRequest}>Logout</mat.MenuItem></div>
                                            {/*<mat.MenuItem onTouchTap={this.gotoAvailable}>Add Report</mat.MenuItem>
                                    <mat.MenuItem onTouchTap={this.gotoComplains}>View My Compalains</mat.MenuItem>
                                    <mat.MenuItem onTouchTap={this.gotoViewCrimes}>View Crimes List</mat.MenuItem>*/}
                                            {/*this.state && this.state.isAdmin?<mat.MenuItem onTouchTap={this.gotoAllViewCrimes}>Respond to Crimes</mat.MenuItem>:""*/}
                                        </div>
                                }
                            </div>
                        </mat.Drawer>
                    </div>
                    {this.props.children}

                </div>
            </div >
        );
    }
}


function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {

        logOutRequest: () => dispatch(logOutRequest()),
        loadUserRequest: () => dispatch(loadUserRequest())
    };
}

const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(rootContainer);

export default rootMainContainer;