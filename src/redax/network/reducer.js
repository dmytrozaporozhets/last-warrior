import * as types from '../network/actionTypes';

const initialState = {
  fetchRequest: [],
  isLoading: false,
};

const ACTION_HANDLERS = {
  [types.FETCH_REQUEST]: (state, action) => ({
    ...state,
    fetchRequest: action.payload,
  }),
  [types.SHOW_LOADER]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [types.HIDE_LOADER]: (state) => ({
    ...state,
    isLoading: false,
  }),
};

const NetworkReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default NetworkReducer;
