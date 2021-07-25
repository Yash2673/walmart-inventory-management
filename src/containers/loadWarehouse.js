import { connect } from 'react-redux';
import LoadWarehouse from '../components/warehouse/loadWarehouse';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadWarehouseRequest } from '../store/actions/loadWarehouse';
import { loadUserRequest } from '../store/actions/loadUserData';
import { childAddedHandler } from '../store/actions/childAddedHandler';

function mapStateToProps(state) {
  //here we are mapping the redux state to props so we can use it in our components
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  childAddedHandler(dispatch);
  //Those will be the actions we will be Triggerening from Components
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loadUserRequest     : () => dispatch(loadUserRequest()),
    loadWarehouseRequest   : (data) => dispatch(loadWarehouseRequest(data))
  };
}

const LoadWarehouseContainer = connect(mapStateToProps, mapDispatchToProps)(LoadWarehouse);

export default LoadWarehouseContainer;