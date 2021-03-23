import * as types from './actionTypes';
import {createAction} from '../../utils';

export const incrementCounter = createAction(types.INCREMENT);
export const decrementCounter = createAction(types.DECREMENT);
export const resetCounter = createAction(types.RESET);

export const disableButtons = createAction(types.DISABLE_BUTTONS);
export const enableButtons = createAction(types.ENABLE_BUTTONS);

export const asyncIncrement = () => {
  return (dispatch) => {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch(incrementCounter());
      dispatch(enableButtons());
    }, 2000);
  };
};

export const showAlert = createAction(types.SHOW_ALERT);
export const hideAlert = createAction(types.HIDE_ALERT);
