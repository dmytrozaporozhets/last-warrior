import {SHOW_LOADER, HIDE_LOADER, LOGIN_SIGN_IN, ACCESS_TOKEN} from './types';
import {GET_USER_DATA} from './types';
import {createAction} from '../../utils';

export const accessToken = createAction(ACCESS_TOKEN);
export const signIn = createAction(LOGIN_SIGN_IN);
export const userDataResponse = createAction(GET_USER_DATA);

export const showLoader = createAction(SHOW_LOADER);
export const hideLoader = createAction(HIDE_LOADER);
