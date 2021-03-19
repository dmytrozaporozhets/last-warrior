import {createAction} from '../../utils';
import * as types from './actionTypes';

export const onAlbumsNetworkRequest = createAction(
  types.ALBUMS_NETWORK_REQUEST,
);

export const getAlbums = createAction(types.GET_ALBUMS);
export const getAlbumsSuccess = createAction(types.GET_ALBUMS_SUCCESS);

export const onAError = createAction(types.ON_ERROR);
