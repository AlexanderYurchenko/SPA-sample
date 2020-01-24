import { SET_POSTS } from "../constants/action-types";

export function setPosts(payload) {
  return { type: SET_POSTS, payload }
};

export function fetchPosts() {
  return function(dispatch) {
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/SPA-sample/master/src/data/posts.json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // this.setState({posts: data.posts});
        dispatch(setPosts(data.posts));
        console.log(data.posts);
      })
      // .then(this.refreshPostsList)
  };
}