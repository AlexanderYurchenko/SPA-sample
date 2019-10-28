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
    this.setState({ post: this.props.post })
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
          <a onClick={this.toggleModal} href="#" className="c-post-single__author">{author}</a>
          <span className="c-post-single__date">{date}</span>
        </div>
      </div>
    );
  }
}

export default PostSingle;
