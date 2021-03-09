import React from 'react';
import {
  ACCESS_TOKEN,
  GET_USER_DATA,
  HIDE_LOADER,
  LOGIN_SIGN_IN,
  SHOW_LOADER,
} from './types';

const initialState = {
  loggedIn: false,
  token: null,
  loading: false,
  user: null,
};

const ACTION_HANDLERS = {
  [ACCESS_TOKEN]: (state, action) => ({
    ...state,
    token: action.payload.access_token,
  }),
  [LOGIN_SIGN_IN]: (state) => ({
    ...state,
    loggedIn: true,
    login: 'dimka',
    password: 12345,
  }),
  [SHOW_LOADER]: (state) => ({
    ...state,
    loading: true,
  }),
  [HIDE_LOADER]: (state) => ({
    ...state,
    loading: false,
  }),
  [GET_USER_DATA]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
};

export const AccessTokenReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
