import {ACCESS_TOKEN, LOGIN_SIGN_IN} from './types';
import {SHOW_LOADER, HIDE_LOADER} from './types';
import {GET_USER_DATA} from './types';

export const accessToken = (data) => {
  return {
    type: ACCESS_TOKEN,
    payload: data,
  };
};

export const signIn = () => {
  return {
    type: LOGIN_SIGN_IN,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const userDataResponse = (data) => ({
  type: GET_USER_DATA,
  payload: data,
});
