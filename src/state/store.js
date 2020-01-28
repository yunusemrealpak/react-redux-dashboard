import { createStore , combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { userReducer } from './reducers/userReducer';
import { dashboard } from './reducers/dashboard';
import { testReducer } from './reducers/testReducer';
import { sidebarReducer } from './reducers/sidebarReducer';

var r = combineReducers({userReducer,dashboard,testReducer, sidebarReducer});
export const store = createStore(r, applyMiddleware(logger));