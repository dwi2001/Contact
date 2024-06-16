import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  POST_CONTACTS_REQUEST,
  POST_CONTACTS_SUCCESS,
  POST_CONTACTS_FAILURE,
  EDIT_CONTACTS_FAILURE,
  EDIT_CONTACTS_REQUEST,
  EDIT_CONTACTS_SUCCESS,
  DELETE_CONTACTS_FAILURE,
  DELETE_CONTACTS_REQUEST,
  DELETE_CONTACTS_SUCCESS,
} from './Types';

import axios from 'axios';
import {
  deleteContact,
  editContact,
  getContact,
  postContact,
} from '../../Api/HttpClient';

const fetchContactsRequest = () => ({
  type: FETCH_CONTACTS_REQUEST,
});

const fetchContactsSuccess = contacts => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

const fetchContactsFailure = error => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: error,
});

const postContactsRequest = () => ({
  type: POST_CONTACTS_REQUEST,
});

const postContactsSuccess = message => ({
  type: POST_CONTACTS_SUCCESS,
  payload: message,
});

const postContactsFailure = error => ({
  type: POST_CONTACTS_FAILURE,
  payload: error,
});

const editContactSuccess = message => ({
  type: EDIT_CONTACTS_SUCCESS,
  payload: message,
});

const editContactFailure = error => ({
  type: EDIT_CONTACTS_FAILURE,
});

const editContactRequest = () => ({
  type: EDIT_CONTACTS_REQUEST,
});

const deleteContactRequest = () => ({
  type: DELETE_CONTACTS_REQUEST,
});

const deleteContactSuccess = () => ({
  type: DELETE_CONTACTS_SUCCESS,
});

const deleteContactFailure = error => ({
  type: DELETE_CONTACTS_FAILURE,
  payload: error,
});

export const fetchContacts = () => {
  return async dispatch => {
    dispatch(fetchContactsRequest());
    try {
      const contacts = await getContact();
      dispatch(fetchContactsSuccess(contacts));
    } catch (error) {
      dispatch(fetchContactsFailure(error));
    }
  };
};

export const postContacts = body => {
  return async dispatch => {
    dispatch(postContactsRequest());
    try {
      const contacts = await postContact(body);
      dispatch(postContactsSuccess(contacts));
    } catch (error) {
      dispatch(postContactsFailure(error.message));
    }
  };
};

export const editContacts = (id, body) => {
  return async dispatch => {
    dispatch(editContactRequest());
    try {
      const contacts = await editContact(id, body);
      dispatch(editContactSuccess(contacts));
    } catch (error) {
      dispatch(editContactFailure(error.message));
    }
  };
};

export const deleteContacts = id => {
  return async dispatch => {
    dispatch(deleteContactRequest());
    try {
      const contacts = await deleteContact(id);
      dispatch(deleteContactSuccess(contacts));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg =
          error.response && error.response.data
            ? error.response.data
            : 'Unknown error';
        console.log('Axios error response:', errorMsg);
        dispatch(deleteContactFailure(errorMsg));
      } else {
        console.log('Unexpected error:', error);
        dispatch(deleteContactFailure('Unexpected error occurred'));
      }
    }
  };
};
