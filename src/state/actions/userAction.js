import * as actionTypes from './actionTypes';
import { user } from '../fake_data';

export function userAction(dispatch, history, {email, password}){

    var payloadUser = {};
    if(user.email === email && user.password === password){

        dispatch({type: actionTypes.LOGIN_REQUEST, payload: true});
        payloadUser = { email, password, login: true, loading: false};
        localStorage.setItem("id_token", email);

        history.push("/dashboard");

        return {
            type: actionTypes.SET_LOGIN,
            payload: payloadUser
        }
    }
    else{
        return {
            type: actionTypes.LOGIN_FAILURE
        }
    }
}