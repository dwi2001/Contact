// src/api.js

import axios from 'axios';

axios.defaults.baseURL = 'https://contact.herokuapp.com/';

axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export const getContact = async () => {
  const endPoint = '/contact';
  try {
    const response = await axios.get(endPoint);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const postContact = async body => {
  const endPoint = '/contact';
  try {
    const response = await axios.post(endPoint, body);
    return response.status;
  } catch (error) {
    throw error;
  }
};

export const editContact = async (id, body) => {
  const endPoint = `contact/${String(id)}`;
  try {
    const response = await axios.put(endPoint, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async id => {
  const endPoint = `contact/${id}`;
  try {
    const response = await axios.delete(endPoint);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('Unexpected error');
    }
  }
};
