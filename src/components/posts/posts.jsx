import React, { Component } from "react";
import Post from "../post/post";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import "./posts.scss"

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts || state.post.posts,
  };
};

class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="c-posts">
        <h2 className="c-posts__title c-h2">Posts List</h2>
        <ul className="c-posts__list">
          {posts && posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts'}
  ])
)(Posts);