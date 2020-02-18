import { SET_POSTS, CREATE_POST, CREATE_POST_ERROR } from "../constants/action-types";

// export function setPosts(payload) {
//   return { type: SET_POSTS, payload }
// };

export const createPost = (post) => {
  return (dispatch, getState) => {
    // let url = "https://raw.githubusercontent.com/AlexanderYurchenko/SPA-sample/redux-try/src/data/posts.json?access_token=f12485d3313138d41a513ce17284bb08c8b0df35"
    let url = "api.github.com/AlexanderYurchenko/SPA-sample/redux-try/src/data/posts.json?access_token=f12485d3313138d41a513ce17284bb08c8b0df35"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'test id',
        title: 'test title',
        info: 'test info',
        date: new Date()
      })
    })
    .then(() => {
      console.log('dispatch');
      dispatch({ 
        type: CREATE_POST, 
        post
      })
    }).catch((error) => {
      console.log('error');
      dispatch({
        type: 'CREATE_POST_ERROR',
        error
      })
    })
    
  }
};

export const fetchPosts = () => {
  return (dispatch) => {
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/SPA-sample/master/src/data/posts.json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // this.setState({posts: data.posts});
        dispatch({ 
          type: SET_POSTS, 
          payload: data.posts 
        });
        // console.log(data.posts);
      })
      .catch((error) => {
        dispatch({
          type: 'SET_POSTS_ERROR',
          error
        })
        console.log(error);
      })
      // .then(this.refreshPostsList)
  };
};