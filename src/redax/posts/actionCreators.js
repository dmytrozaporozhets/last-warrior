import {createAction} from '../../utils';
import * as types from './actionTypes';
import {requestPostURL} from '../../../assets/link/request';
import {FETCH_REQUEST} from '../network';

export const onCreatePost = createAction(types.CREATE_POST);

export const showLoader = createAction(types.SHOW_LOADER);
export const hideLoader = createAction(types.HIDE_LOADER);

export const onCreateFetchPost = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(requestPostURL);
      const json = await response.json();
      dispatch({type: FETCH_REQUEST, payload: json});
      dispatch(hideLoader());
    } catch {
      console.log('Что-то пошло не так');
    }
  };
};
