import React, { Component } from 'react';
import FormGroup from "../form-group/form-group";
import './auth.scss';

class SignIn extends Component {
  state = { 
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.history.push('/')
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value 
    })
  }

  render() { 
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
        </form>
      </div>    
    );
  }
}
 
export default SignIn;