import * as types from '../photos/actionTypes';

const initialState = {
  data: [],
  isLoading: false,
};

const ACTION_HANDLERS = {
  [types.PHOTOS_NETWORK_REQUEST]: (state) => ({...state, isLoading: true}),
  [types.GET_PHOTOS_SUCCESS]: (state, action) => ({
    data: action.payload,
    isLoading: false,
  }),
  [types.ON_ERROR]: (state) => ({...state, isLoading: false}),
};

const PhotoReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default PhotoReducer;
