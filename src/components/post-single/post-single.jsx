import React, { Component } from "react";
import "./post-single.scss";

class PostSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    const postRegExp = new RegExp("([^\/]+$)")
    const postId = postRegExp.exec(this.props.match.url)
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/SPA-sample/master/src/data/post" + postId[1] + ".json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({post: data.post});
      })
  }

  render() {
    const { title, text, author, date } = this.state.post;

    return (
      <div className="c-post-single">
        <div className="c-post-single__title-box">
          <div className="c-post-single__title">{title}</div>
        </div>
        <div className="c-post-single__text">{text}</div>
        <div className="c-post-single__head">
          <div className="c-post-single__author">{author}</div>
          <span className="c-post-single__date">{date}</span>
        </div>
      </div>
    );
  }
}

export default PostSingle;
