import React from 'react';
import {
  CHANGE_COLOR_FON,
  CHANGE_COLOR_TEXT,
  CHANGE_THEME,
  CHANGE_WINDOWS,
  ON_RESET,
} from './typesAbout';

const InitialBackgroundColorState = {
  backgroundColor: {backgroundColor: 'white'},
};

export const ChangeColorFonReducer = (
  state = InitialBackgroundColorState,
  action,
) => {
  const {backgroundColor} = action;
  switch (action.type) {
    case CHANGE_COLOR_FON:
      return {...state, backgroundColor: {backgroundColor}};
    default:
      return state;
  }
};

const InitialTextState = {
  color: {color: 'black'},
};

export const ChangeColorTextReducer = (state = InitialTextState, action) => {
  const {color} = action;
  switch (action.type) {
    case CHANGE_COLOR_TEXT:
      return {...state, color: {color}};
    default:
      return state;
  }
};

const InitialThemeState = {
  theme: {backgroundColor: 'black'},
};

export const ChangeThemeReducer = (state = InitialThemeState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, theme: {backgroundColor: 'grey'}};
    default:
      return state;
  }
};

const InitialWindowsState = {
  windows: {backgroundColor: 'white'},
};

export const ChangeWindowsReducer = (state = InitialWindowsState, action) => {
  switch (action.type) {
    case CHANGE_WINDOWS:
      return {...state, windows: {backgroundColor: 'green'}};
    default:
      return state;
  }
};

const InitialOnResetState = {
  reset: null,
};

export const OnResetReducer = (state = InitialOnResetState, action) => {
  switch (action.type) {
    case ON_RESET:
      return {...state, reset: null};
    default:
      return state;
  }
};
