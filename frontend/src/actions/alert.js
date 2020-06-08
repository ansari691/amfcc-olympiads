import {v1 as uuidv1} from "uuid"; 

import { SET_ALERT, REMOVE_ALERT } from './types';


export const setAlert = (msg, alertType) => dispatch => {
    const id = uuidv1();
    dispatch({
        type : SET_ALERT,
        payload : { id, msg, alertType }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload : id}), 3000);
    //dispatch({ type: REMOVE_ALERT, payload : id});
}