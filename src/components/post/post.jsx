import React from "react";
import { Route, Link } from "react-router-dom";
import PostSingle from "../post-single/post-single";
import "./post.scss"

const Post = ( props ) => {
  const { id, title, info } = props.post;

  return (
    <div className="c-post">
      <div className="c-post__title-box">
        <Link to={`/post/${id}`} className="c-post__title">{title}</Link>
      </div>
      <div className="c-post__info">{info}</div>
      <Route path="/post/:postId"  children={(props) => (
        props.match
          ? <PostSingle {...props}/> : ''
      )}/>
    </div>
  );
}

export default Post;
