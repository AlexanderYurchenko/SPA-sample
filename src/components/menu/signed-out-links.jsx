import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <NavLink to='/' className="c-btn">Sign Up</NavLink>
      <NavLink to='/' className="c-btn">Log In</NavLink>
    </React.Fragment>
  )
}

export default SignedOutLinks