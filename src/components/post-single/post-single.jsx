import React, { Component } from "react";
import { connect } from 'react-redux';
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
    const { title, info, author, date } = this.props.post;

    return (
      <div className="c-post-single">
        <div className="c-post-single__title-box">
          <div className="c-post-single__title c-h1">{title}</div>
        </div>
        <div className="c-post-single__text">{info}</div>
        <div className="c-post-single__footer">
          <div className="c-post-single__author">{author}</div>
          <span className="c-post-single__date">{date}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.postId);
  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(PostSingle);
