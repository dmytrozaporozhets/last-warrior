import {createAction} from '../../utils';
import * as types from './actionTypes';
import {requestPhotosURL} from '../../../assets/link/request';
import {FETCH_REQUEST} from './actionTypes';

export const showLoader = createAction(types.SHOW_LOADER);
export const hideLoader = createAction(types.HIDE_LOADER);

export const onCreateRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(requestPhotosURL);
      const json = await response.json();
      dispatch({type: FETCH_REQUEST, payload: json});
      dispatch(hideLoader());
    } catch {
      console.log('Error');
    }
  };
};

