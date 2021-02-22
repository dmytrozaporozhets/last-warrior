import React from 'react';
import {DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from './types';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const disableButtons = () => {
  return {
    type: DISABLE_BUTTONS,
  };
};

export const enableButtons = () => {
  return {
    type: ENABLE_BUTTONS,
  };
};

export const asyncIncrement = () => {
  return (dispatch) => {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch(increment());
      dispatch(enableButtons());
    }, 2000);
  };
};
