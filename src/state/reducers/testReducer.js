import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    username: 'Bekleniyor...'
}

export function testReducer(state=initialState, action){
    switch (action.type) {
        case actionTypes.TEST:
            return {
                username: action.payload
            }
        default:
            return state;
    }
}