import { connect } from 'react-redux';
import AddWarehouse from '../components/warehouse/addWareHouse';
import { loadInitialState } from '../store/actions/loadInitialState';
import { addWarehouseRequest } from '../store/actions/addWarehouseRequest';
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
    addWarehouseRequest          : (reportData) => dispatch(addWarehouseRequest(reportData))
  };
}

const AddWarehouseContainer = connect(mapStateToProps, mapDispatchToProps)(AddWarehouse);

export default AddWarehouseContainer;