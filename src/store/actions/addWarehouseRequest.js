import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function addWarehouseRequest(reportData) {
    console.log(reportData);
    return dispatch => {
        dispatch(AddWarehouseRequest());
        reportData.isPublic =  reportData.inicidentType!=3?true:false;
        console.log("yes")
        return fbConfigs.database.ref('/Warehouses').push(reportData).then((data)=>{
            alert("Successfully Added.");
            dispatch(addWarehouseRequestSuccess(data));
        }).catch(err => {
            alert(err.response);
        })
    }
}

function AddWarehouseRequest() {
    console.log("Yes2")
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