import React, {Component} from 'react';
import FormGroup from "../form-group/form-group";
import './contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      email: '',
      message: ''
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/')
  }

  render() { 
    const { name, email, message } = this.state;
    return (
      <form className="c-contact">
        <div className="c-contact__grid">
          <FormGroup 
            name="name" 
            title="Name" 
            value={name}
            onChange={this.handleChangeInput}/>
          <FormGroup 
            name="email" 
            title="E-mail" 
            value={email}
            type="mail"
            onChange={this.handleChangeInput}/>
          <FormGroup 
            name="message" 
            title="Message" 
            value={message}
            type="textarea"
            onChange={this.handleChangeInput}/>
        </div>
        <div className="c-contact__btn-box">
          <button onClick={this.handleSubmit} className="c-btn" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
 
export default Contact;
