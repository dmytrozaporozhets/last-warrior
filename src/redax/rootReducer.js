import {combineReducers} from 'redux';
import {AccessTokenReducer} from './auth/reducer';
import InterfaceReducer from './interface/reducer';

export const rootReducer = combineReducers({
  interface: InterfaceReducer,
  token: AccessTokenReducer,
  loading: AccessTokenReducer,
  auth: AccessTokenReducer,
});
