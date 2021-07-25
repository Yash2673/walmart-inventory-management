import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function addProductRequest(ProductData) {
    console.log(ProductData);
    return dispatch => {
        dispatch(AddProductRequest());
        ProductData.isPublic =  ProductData.inicidentType!=3?true:false;
        return fbConfigs.database.ref('/products').push(ProductData).then((data)=>{
            alert("Successfully Added.");
            dispatch(addProductRequestSuccess(data));
        }).catch(err => {
            alert(err.response);
        })
    }
}

function AddProductRequest() {
    return {
        type: ActionTypes.addProductRequest
    };
}

function addProductRequestSuccess(data) {
    return {
        type: ActionTypes.addProductRequestSuccess,
        data
    };
}

function addProductRequestFailed() {
    return {
        type: ActionTypes.addProductRequestFailed
    };
}