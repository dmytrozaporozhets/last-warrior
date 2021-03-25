import * as types from '../posts/actionTypes';

const initialState = {
  posts: [],
  fetchPosts: [],
  isLoading: false,
};

const ACTION_HANDLERS = {
  [types.CREATE_POST]: (state, action) => ({
    ...state,
    posts: action.payload,
  }),
  [types.FETCH_POST]: (state, action) => ({
    ...state,
    fetchPosts: action.payload,
  }),
  [types.SHOW_LOADER]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [types.HIDE_LOADER]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [types.RESET]: (state) => ({
    ...state,
    fetchPosts: [],
  }),
};

const PostReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default PostReducer;
