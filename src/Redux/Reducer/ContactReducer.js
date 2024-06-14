// src/redux/reducers.js

import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  POST_CONTACTS_REQUEST,
  POST_CONTACTS_SUCCESS,
  POST_CONTACTS_FAILURE,
  EDIT_CONTACTS_FAILURE,
  EDIT_CONTACTS_SUCCESS,
  EDIT_CONTACTS_REQUEST,
  DELETE_CONTACTS_FAILURE,
  DELETE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_REQUEST,
} from '../Action/Types';

const initialState = {
  loading: false,
  contacts: [],
  error: null,
  message: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        loading: false,
        contacts: action.payload,
        error: '',
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        loading: false,
        contacts: [],
        error: action.payload,
      };
    case POST_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case POST_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case EDIT_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case DELETE_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default contactsReducer;
