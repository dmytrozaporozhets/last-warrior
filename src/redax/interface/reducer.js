import * as types from './actionTypes';

const initialState = {
  disabled: false,
  count: 0,
};

const ACTION_HANDLERS = {
  [types.DECREMENT]: (state) => ({
    ...state,
    count: state.count - 1,
  }),
  [types.INCREMENT]: (state) => ({
    ...state,
    count: state.count + 1,
  }),
  [types.RESET]: (state) => ({
    ...state,
    count: 0,
  }),
  [types.DISABLE_BUTTONS]: (state) => ({
    ...state,
    disabled: true,
  }),
  [types.ENABLE_BUTTONS]: (state) => ({
    ...state,
    disabled: false,
  }),
};

const InterfaceReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default InterfaceReducer;
