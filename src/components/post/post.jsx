import React from "react";
import { Route, Link } from "react-router-dom";
import PostSingle from "../post-single/post-single";
import "./post.scss"

const Post = ( props ) => {
  const { id, title, text, createdAt, authorFirstName, authorLastName } = props.post;
  const date = new Date(createdAt.seconds * 1000).toLocaleDateString();

  return (
    <div className="c-post">
      <Link to={`/post/${id}`} className="c-post__title">{title}</Link>
      <div className="c-post__info">{text}</div>
      <div className="c-post__footer">
        <div className="c-post__author">by {authorFirstName} {authorLastName}</div>
        <div className="c-post__date">{date}</div>
      </div>
      
      <Route path="/post/:postId"  children={(props) => (
        props.match
          ? <PostSingle {...props}/> : ''
      )}/>
    </div>
  );
}

export default Post;
