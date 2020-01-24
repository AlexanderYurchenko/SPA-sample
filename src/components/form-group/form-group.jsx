import React, { Component } from 'react';

class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      value: '', 
      type: '',
      focusedState: ''
    };

    this.handleGroupClick = this.handleGroupClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.renderInputField = this.renderInputField.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      name: this.props.name, 
      title: this.props.title, 
      value: this.props.value,
      type: this.props.type,
      focusedState : ( this.props.value ? true : false) 
    });
  }

  static getDerivedStateFromProps(props) {
    return ({ 
      name: props.name, 
      title: props.title, 
      value: props.value,
    });
  }

  handleGroupClick(event) {
    const formGroup = event.target.parentNode;

    if (!formGroup.classList.contains('is-focused')) {
      formGroup.className += ' is-focused';
      formGroup.childNodes[1].focus();

      this.setState({
        focusedState: true
      })
    }
  }

  handleBlur(event) {
    const formGroup = event.target.parentNode;

    if (event.target.value === '' && formGroup.classList.contains('is-focused')) {
      formGroup.classList.remove('is-focused');

      this.setState({
        focusedState: false
      })
    } 
  }

  renderInputField() {
    if (this.state.type === 'textarea') {
      return (
        <textarea className="c-field" id={this.state.name} name={this.state.name} value={this.state.value} onBlur={this.handleBlur} onChange={this.props.onChange} onClick={this.handleGroupClick}/>
      )
    } else {
      return (
        <input type={this.state.type ? this.state.type : 'text'} className="c-field" id={this.state.name} name={this.state.name} value={this.state.value} onBlur={this.handleBlur} onChange={this.props.onChange}/>
      )
    }
  }

  render() { 
    const { name, title, focusedState } = this.state;

    return ( 
      <div className={"c-form-group" + (focusedState ? ' is-focused' : '')}>
        <label className="c-form-group__title" htmlFor={name} onClick={this.handleGroupClick}>{title}</label>
        {this.renderInputField()}
      </div>
    );
  }
}
 
export default FormGroup;