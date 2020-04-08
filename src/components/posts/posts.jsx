import React, { Component } from "react";
import Post from "../post/post";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import "./posts.scss"

const mapStateToProps = state => {
  return { 
    posts: state.firestore.ordered.posts || state.post.posts,
    // refreshPostsList: state.refreshPostsList,
    // refreshPost: state.refreshPost
  };
};

class Posts extends Component {
  // state = {
  //   posts: [],
  //   refresh: false
  // };

  // UNSAFE_componentWillReceiveProps(props) {
  //   const { refresh } = this.props;
  //   if (props.refresh !== refresh) {
  //     this.setState({ posts: props.posts })
  //   }
  // }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.refresh !== state.refresh) {
  //     // this.setState({ posts: props.posts })
  //     return ({
  //       posts: props.posts
  //     })
  //   }

  //   return null;
  // }

  // componentDidMount() {
  //   this.setState({ posts: this.props.posts })
  // }
  
  render() {
    // console.log(this.props);
    // const { posts } = this.state;
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

// export default connect(mapStateToProps)(Posts);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts'}
  ])
)(Posts);