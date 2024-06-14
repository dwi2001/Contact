// src/redux/reducers/index.js

import {combineReducers} from 'redux';
import contactsReducer from './ContactReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
