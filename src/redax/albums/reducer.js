import * as types from '../albums/actionTypes';

const initialState = {
  data: [],
  isLoading: false,
};

const ACTION_HANDLERS = {
  [types.ALBUMS_NETWORK_REQUEST]: (state) => ({...state, isLoading: true}),
  [types.GET_ALBUMS_SUCCESS]: (state, action) => ({
    data: action.payload,
    isLoading: false,
  }),
  [types.ON_ERROR]: (state) => ({...state, isLoading: false}),
};

const AlbumsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default AlbumsReducer;
