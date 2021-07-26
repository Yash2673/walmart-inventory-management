import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadWarehouseRequest(loadWarehouseData) {
    return dispatch => {
        dispatch(LoadWarehouseRequest());
        console.log(loadWarehouseData)
        if(loadWarehouseData){
            return fbConfigs.database.ref('/Warehouses').orderByChild('userEmail').equalTo( loadWarehouseData.email).once('value', snap => {
                const todo = [];
                snap.forEach(childSnapshot => {
                    var innerTodo = childSnapshot.val();
                    innerTodo.key = childSnapshot.key;
                        todo.push(innerTodo);
                })
                dispatch(loadWarehouseRequestSuccess(todo))
            });
        }else{
            dispatch(loadWarehouseRequestFailed())
        }
    }
}

function LoadWarehouseRequest() {
    return {
        type: ActionTypes.loadWarehouseRequest
    };
}

function loadWarehouseRequestSuccess(data) {
    return {
        type: ActionTypes.loadWarehouseRequestSuccess,
        data
    };
}

function loadWarehouseRequestFailed() {
    return {
        type: ActionTypes.loadWarehouseRequestFailed
    };
}