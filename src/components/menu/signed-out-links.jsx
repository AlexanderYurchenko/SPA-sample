import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <NavLink to='/signup' className="c-btn">Sign Up</NavLink>
      <NavLink to='/signin' className="c-btn">Sign In</NavLink>
    </React.Fragment>
  )
}

export default SignedOutLinks