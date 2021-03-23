import {createAction} from '../../utils';
import * as types from './actionTypes';

export const onAlbumsNetworkRequest = createAction(
  types.PHOTOS_NETWORK_REQUEST,
);

export const getAlbums = createAction(types.GET_PHOTOS);
export const getAlbumsSuccess = createAction(types.GET_PHOTOS_SUCCESS);

export const onAError = createAction(types.ON_ERROR);
