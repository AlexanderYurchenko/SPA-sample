import React, { Component } from 'react';
import FormGroup from "../form-group/form-group";
import './auth.scss';
import { connect } from 'react-redux';
import { signIn } from '../../js/actions/authActions'

class SignIn extends Component {
  state = { 
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state, this.props.history);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value 
    })
  }

  render() { 
    const { authError } = this.props;

    return (  
      <div className="c-auth">
        <form onSubmit={this.handleSubmit} className="c-auth__form">
          <div className="c-auth__title">Sign In</div>
          <div className="c-auth__grid">
            <FormGroup 
              name="email" 
              title="E-mail" 
              type="mail"
              onChange={this.handleChange}/>
            <FormGroup 
              name="password" 
              title="Password" 
              type="password"
              onChange={this.handleChange}/>
          </div>
          <div className="c-auth__btn-box">
            <button className="c-btn" type="submit">Login</button>
          </div>
          { authError ? <div className="c-auth__error">{authError}</div> : '' }
        </form>
      </div>    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds, history) => dispatch(signIn(creds, history))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);