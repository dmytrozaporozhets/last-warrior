import React from 'react';
import {
  CHANGE_COLOR_FON,
  CHANGE_COLOR_TEXT,
  CHANGE_THEME,
  CHANGE_WINDOWS,
  ON_RESET,
} from './typesAbout';

export const changeColorFon = (backgroundColor) => {
  return {
    type: CHANGE_COLOR_FON,
    backgroundColor,
  };
};

export const changeColorText = (color) => {
  return {
    type: CHANGE_COLOR_TEXT,
    color,
  };
};

export const changeTheme = () => {
  return {
    type: CHANGE_THEME,
  };
};

export const changeWindows = () => {
  return {
    type: CHANGE_WINDOWS,
  };
};

export const onReset = () => {
  return {
    type: ON_RESET,
  };
};
