import { SET_POSTS, CREATE_POST, CREATE_POST_ERROR } from "../constants/action-types";

export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirebase().firestore();
    firestore.collection('posts').add({
      ...post,
      authorFirstName: 'Ben',
      authorLastName: 'Cumber',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: CREATE_POST,
        post
      })
    }).catch((error) => {
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
        dispatch({
          type: SET_POSTS,
          payload: data.posts
        });
      })
      .catch((error) => {
        dispatch({
          type: 'SET_POSTS_ERROR',
          error
        })
        console.log(error);
      })
  };
};