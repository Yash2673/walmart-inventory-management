import ActionTypes from '../actions/actionTypes';

const initial_state = {};
export function applicationReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState: {
      if (localStorage.getItem("inventoryUserData")) {
        console.log("Yes2")
        var newState = Object.assign({}, state, { user: JSON.parse(localStorage.getItem("inventoryUserData")) });
        state = newState;
        return state;
      }
      else
        return state;
    }
    case ActionTypes.LoginRequestSuccess: {
      var newState = Object.assign({}, state, { user: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.SignUpRequestSuccess: {
      var newState = Object.assign({}, state, { user: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.requiredBloodRequestSuccess: {
      var newState = Object.assign({}, state, { allBloods: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.updateBloodRequestSuccess: {
      var newState = Object.assign({}, state, { allBloods: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.logOutRequestSuccess: {
      if (localStorage.getItem("inventoryUserData")) {
        localStorage.removeItem("inventoryUserData");
      }
      var newState = Object.assign({});
      state = newState;
      return state;
    }
    case ActionTypes.loadUserRequest: {
      if (localStorage.getItem("inventoryUserData")) {
        var newState = Object.assign({}, state, { user: JSON.parse(localStorage.getItem("inventoryUserData")) });
        state = newState;
        return state;
      }
      else {
        var newState = Object.assign({}, state);
        state = newState;
        return state;
      }
    }
    case ActionTypes.addProductRequestSuccess: {
      var newState = Object.assign({}, state);
      state = newState;
      return state;
    }
    case ActionTypes.addWarehouseRequestSuccess: {
      var newState = Object.assign({}, state);
      state = newState;
      return state;
    }
    case ActionTypes.addStoreRequestSuccess: {
      var newState = Object.assign({}, state);
      state = newState;
      return state;
    }
    case ActionTypes.loadstoresRequestSuccess: {
      var newState = Object.assign({}, state, { allStores: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.loadSalesRequestSuccess: {
      var newState = Object.assign({}, state, { allSales: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.loadPurchasesRequestSuccess: {
      var newState = Object.assign({}, state, { allPurchase: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.loadCrimesRequestSuccess: {
      var newState = Object.assign({}, state, { allCrimes: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.loadProductsRequestSuccess: {
      var newState = Object.assign({}, state, { allProducts: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.loadWarehouseRequestSuccess: {
      var newState = Object.assign({}, state, { allWarehouse: action.data });
      state = newState;
      return state;
    }
    

    case ActionTypes.viewAllCrimesRequestSuccess: {
      var newState = Object.assign({}, state, { allCrimes: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.addedReportRequestSuccess: {
      var newState = Object.assign({}, state);
      newState.allCrimes = newState.allCrimes || [];
      if (action.todos) {
        newState.allCrimes.push(action.todos);
      }
      state = newState;
      return state;
    }
    default:
      return state;
  }
}