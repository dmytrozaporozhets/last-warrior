import {combineReducers} from 'redux';
import {AccessTokenReducer} from './auth/reducer';
import InterfaceReducer from './interface/reducer';
import AlbumReducer from './albums';
import PhotoReducer from './photos';
import PostReducer from './posts';
import NetworkReducer from './network';

export const rootReducer = combineReducers({
  interface: InterfaceReducer,
  token: AccessTokenReducer,
  loading: AccessTokenReducer,
  auth: AccessTokenReducer,
  album: AlbumReducer,
  photo: PhotoReducer,
  post: PostReducer,
  network: NetworkReducer,
});
