import * as actionTypes from './actionTypes';

export function testAction(testValue){
    return {
        type: actionTypes.TEST,
        payload: testValue
    }
}