import { SET_POSTS } from "../constants/action-types";

const initialState = {
  posts: [],
  refreshPostsList: false,
  refreshPost: false
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_POSTS) {
    console.log(action);
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;