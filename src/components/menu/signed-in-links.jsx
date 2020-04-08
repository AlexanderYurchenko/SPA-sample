import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../js/actions/authActions';

const SignedInLinks = (props) => {
  let history = useHistory();
  return (
    <React.Fragment>
      <NavLink to='/create' className="c-btn">Add Post</NavLink>
      <a onClick={() => {props.signOut(history)}} href="#" className="c-btn">Log Out</a>
      <NavLink to='/' className="c-user-icon">NN</NavLink>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (history) => dispatch(signOut(history))
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)