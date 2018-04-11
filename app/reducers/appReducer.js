import { combineReducers } from 'redux';
import { nav } from './navigationReducer';
import * as authReducer from './authReducer';

const AppReducer = combineReducers({
  nav,
	authReducer
});

export default AppReducer;
