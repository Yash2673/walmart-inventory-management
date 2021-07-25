import { connect } from 'react-redux';
import LoadStores from '../components/stores/loadStores';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadstoresRequest } from '../store/actions/loadStores';
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
    loadstoresRequest   : (data) => dispatch(loadstoresRequest(data))
  };
}

const LoadStoresContainer = connect(mapStateToProps, mapDispatchToProps)(LoadStores);

export default LoadStoresContainer;