import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import "./post-single.scss";

class PostSingle extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     post: [],
  //   };
  // }

  // componentDidMount() {
  //   const postRegExp = new RegExp("([^\/]+$)")
  //   const postId = postRegExp.exec(this.props.match.url)
  //   let url = "https://raw.githubusercontent.com/AlexanderYurchenko/SPA-sample/master/src/data/post" + postId[1] + ".json"
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({post: data.post});
  //     })
  // }

  render() {
    console.log(this.props);
    const { title, text, authorFirstName, authorLastName, createdAt } = this.props.post || '';
    const date = createdAt ? new Date(createdAt.seconds * 1000).toLocaleDateString() : '';

    if (this.props.post) {
      return (
        <div className="c-post-single">
          <div className="c-post-single__title-box">
            <div className="c-post-single__title c-h1">{title}</div>
          </div>
          <div className="c-post-single__text">{text}</div>
          <div className="c-post-single__footer">
            <div className="c-post-single__author-box">Posted by 
              <div className="c-post-single__author">{authorFirstName} {authorLastName}</div>
            </div>
            <span className="c-post-single__date">{date}</span>
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.postId;
  const posts = state.firestore.data.posts;
  console.log(state);
  const post = posts ? posts[id] : null;
  console.log(ownProps);

  return {
    post: post
    // post: state.posts.find(post => post.id === id)
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'posts',
      // doc: props.match.params.postId,
    }
  ])
)(PostSingle);
