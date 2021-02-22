import React from 'react';
import {combineReducers} from 'redux';
import {AccessTokenReducer} from './Form/reducer';
import {
  ChangeColorFonReducer,
  ChangeColorTextReducer,
  ChangeThemeReducer,
  ChangeWindowsReducer,
  OnResetReducer,
} from './About/reducesAbout';
import {blockButtons, counterReducer} from './Display/reducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  block: blockButtons,
  token: AccessTokenReducer,
  background: ChangeColorFonReducer,
  text: ChangeColorTextReducer,
  theme: ChangeThemeReducer,
  windows: ChangeWindowsReducer,
  reset: OnResetReducer,
  loading: AccessTokenReducer,
  auth: AccessTokenReducer,
});
