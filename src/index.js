import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginContainer from './containers/login';
import SignUpContainer from './containers/signup';
import rootMainContainer from './containers/rootContainer';
import DashboardContainer from './containers/dashboard';
import AddProductContainer from './containers/addProduct';
import AddWarehouseContainer from './containers/addWareHouse';
import AddStoreContainer from './containers/addStore';
import UpdateProductContainer from './containers/updateProduct';
import AddSalesContainer from './containers/addSales';
import AddPurchaseContainer from './containers/addPurchase';
import LoadProductsContainer from './containers/loadProducts';
import LoadWarehouseContainer from './containers/loadWarehouse';
import LoadSalesContainer from './containers/loadSales';
import LoadPurchaseContainer from './containers/loadPurchase';
import ViewAllCrimesContainer from './containers/viewAllCrimes';
import adminDashboardContainer from './containers/adminContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ViewStore from './containers/loadStores'
injectTapEventPlugin();
import * as mat from 'material-ui';
import Particles from 'react-particles-js';

import {
  browserHistory,
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router';
const particlesbro = {

  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#1e1e1e"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ADD8E6"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2,
      "random": false,
      "anim": {
        "enable": false,
        "speed": .5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "size_min": 0.4,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ADD8E6",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 1
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}
class RootComponent extends Component {
  render() {
    return (
      <div>
        <Particles
          className='particles'
          params={particlesbro}
          style={{
            width: '100%',

          }}


        />
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={rootMainContainer}>
                <IndexRedirect to="/login" />
                <Route path="/dashboard" component={LoadProductsContainer} />
                <Route path="/dashboard" component={LoadWarehouseContainer} />
                <Route path="/addProduct" component={AddProductContainer} />
                <Route path="/addWareHouse" component={AddWarehouseContainer} />
                <Route path="/updateProduct/:productId" component={UpdateProductContainer} />
                <Route path="/addStore" component={AddStoreContainer} />
                <Route path="/addSales" component={AddSalesContainer} />
                <Route path="/viewSales" component={LoadSalesContainer} />
                <Route path="/addPurchase" component={AddPurchaseContainer} />
                <Route path="/viewPurchase" component={LoadPurchaseContainer} />
                <Route path="/viewProducts" component={LoadProductsContainer} />
                <Route path="/viewAllCrimes" component={ViewAllCrimesContainer} />
                <Route path="/viewStores" component={ViewStore} />
                <Route path="/viewWarehouses" component={LoadWarehouseContainer} />
              </Route>
              <Route path="/login" component={LoginContainer} >
              </Route>
              <Route path="/signup" component={SignUpContainer}>
              </Route>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render((
  <RootComponent />
),
  document.getElementById('root')
);
