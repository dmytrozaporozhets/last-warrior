import {createAction} from '../../utils';
import * as types from './actionTypes';

export const onCreatePost = createAction(types.CREATE_POST);
export const onCreateFetchPost = createAction(types.REQUEST_POSTS);

export const showLoader = createAction(types.SHOW_LOADER);
export const hideLoader = createAction(types.HIDE_LOADER);

export const onResetPost = createAction(types.RESET_POST);
export const onResetFetchPost = createAction(types.RESET_FETCH_POST);
