import * as actionTypes from '../actions/actionTypes';

var initialState = {
    email: '',
    password: '',
    login: false,
    loading: false,
    error: false
}

export function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.LOGIN_REQUEST:
            return {...state, loading: payload};
        case actionTypes.LOGIN_FAILURE:
            return {...state, loading: false, error: true};
        case actionTypes.SET_LOGIN:
            return payload;
        default:
            return state;
    }
}