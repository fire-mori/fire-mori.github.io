import { combineReducers } from 'redux';
import horsesReducer from './horses/horses.reducer';

export default combineReducers({ horses: horsesReducer });
