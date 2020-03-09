import { SET_POSTS, CREATE_POST, CREATE_POST_ERROR } from "../constants/action-types";
// import { getFirestore } from 'redux-firestore';

// export function setPosts(payload) {
//   return { type: SET_POSTS, payload }
// };

export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firestore = getFirestore();
    const firestore = getFirebase().firestore();
    firestore.collection('posts').add({
      ...post,
      authorFirstName: 'Ben',
      authorLastName: 'Cumber',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      console.log('dispatch');
      dispatch({ 
        type: CREATE_POST, 
        post
      })
    }).catch((error) => {
      console.log('error');
      dispatch({
        type: CREATE_POST_ERROR,
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