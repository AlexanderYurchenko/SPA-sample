import React from 'react';
import { Link } from "react-router-dom";
import "./not-found.scss"

const NotFound = () => {
  return (  
    <div className="c-not-found">
      <div className="c-not-found__title">Oops! Nothing found here!</div>
      <div className="c-not-found__btn-box">
        <Link to="/" className="c-not-found__btn">To the home page</Link>
      </div>
    </div>
  );
}
 
export default NotFound;