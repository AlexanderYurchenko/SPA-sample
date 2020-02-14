import React, { Component } from 'react';
import FormGroup from "../form-group/form-group";
import './post-create.scss';

class CreatePost extends Component {
  state = { 
    title: '',
    content: ''
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
      <div className="c-create-post">
        <form onSubmit={this.handleSubmit} className="c-create-post__form">
          <div className="c-create-post__title">Post create</div>
          <div className="c-create-post__grid">
            <FormGroup 
              name="title" 
              title="Title" 
              type="text"
              onChange={this.handleChange}/>
            <FormGroup 
              name="content" 
              title="Post content" 
              type="textarea"
              onChange={this.handleChange}/>
          </div>
          <div className="c-create-post__btn-box">
            <button className="c-btn" type="submit">Create</button>
          </div>
        </form>
      </div>    
    );
  }
}
 
export default CreatePost;