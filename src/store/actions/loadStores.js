import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadstoresRequest(loadstoresData) {
    return dispatch => {
        dispatch(LoadstoresRequest());
        console.log(loadstoresData)
        if(loadstoresData){
            return fbConfigs.database.ref('/Stores').orderByChild('userEmail').equalTo(loadstoresData.email).once('value', snap => {
                const todo = [];
                snap.forEach(childSnapshot => {
                    var innerTodo = childSnapshot.val();
                    innerTodo.key = childSnapshot.key;
                        todo.push(innerTodo);
                })
                dispatch(loadstoresRequestSuccess(todo))
                console.log(todo)
            });
        }else{
            dispatch(loadstoresRequestFailed())
        }
    }
}

function LoadstoresRequest() {
    return {
        type: ActionTypes.loadstoresRequest
    };
}

function loadstoresRequestSuccess(data) {
    return {
        type: ActionTypes.loadstoresRequestSuccess,
        data
    };
}

function loadstoresRequestFailed() {
    return {
        type: ActionTypes.loadstoresRequestFailed
    };
}