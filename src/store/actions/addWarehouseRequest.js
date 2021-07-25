import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function addWarehouseRequest(ProductData) {
    console.log(ProductData);
    return dispatch => {
        dispatch(addWarehouseRequest());
        ProductData.isPublic =  ProductData.inicidentType!=3?true:false;
        return fbConfigs.database.ref('/warehouse').push(ProductData).then((data)=>{
            alert("Successfully Added.");
            dispatch(addWarehouseRequestSuccess(data));
        }).catch(err => {
            alert(err.response);
        })
    }
}

function addWarehouseRequest() {
    return {
        type: ActionTypes.addWarehouseRequest
    };
}

function addWarehouseRequestSuccess(data) {
    return {
        type: ActionTypes.addWarehouseRequestSuccess,
        data
    };
}

function addWarehouseRequestFailed() {
    return {
        type: ActionTypes.addWarehouseRequestFailed
    };
}