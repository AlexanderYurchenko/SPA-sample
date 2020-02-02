import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <React.Fragment>
      <NavLink to='/' className="c-btn">Add Post</NavLink>
      <NavLink to='/' className="c-btn">Log Out</NavLink>
      <NavLink to='/' className="c-user-icon">NN</NavLink>
    </React.Fragment>
  )
}

export default SignedInLinks