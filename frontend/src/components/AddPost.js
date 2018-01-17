import React, { Component } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { add_post } from '../actions';
import { RaisedButton } from 'material-ui/List';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import uuid from 'uuid';
import MdAdd from 'react-icons/lib/md/add'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import './App.css'

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      category: ''
    }
  }
  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleBody(event) {
    this.setState({
      body: event.target.value
    });
  }
  handleAuthor(event) {
    this.setState({
      author: event.target.value
    });
  }
  handleCategory(event, eventKey) {
    this.setState({
      category: eventKey.target.innerHTML
    });
  }
  validateForm(e) {
    e.preventDefault();
    let validated = true;
    if (typeof this.state.title !== 'string' || !this.state.title) {
      alert('Invalid title!');
      validated = false;
    }
    if (typeof this.state.body !== 'string' || !this.state.body) {
      alert('Invalid body!');
      validated = false;
    }
    if (typeof this.state.author !== 'string' || !this.state.author) {
      alert('Invalid author!');
      validated = false;
    }
    if (typeof this.state.category !== 'string' || !this.state.category) {
      alert('Invalid category!');
      validated = false;
    }
    if (validated) {this.handleSubmit(e)};
  }
  handleSubmit(e) {
    if (this.props.addPost) {
      this.props.addPost(this.state);
    }
  }
  render() {
    const { closeAddPost, deletePost, updatePost, categories } = this.props;
    let categoryList = null;
    if (categories) { categoryList = categories.map(c => {
      return c.name;
    })}
    return (
      <Form onSubmit={(e) => {
        this.validateForm(e);
      }}>
        <input
          required
          size="60"
          className="input-title"
          onChange={this.handleTitle.bind(this)}
          value={this.state.title}
          placeholder="Enter the title" />
        <textarea
          className="input-body"
          onChange={this.handleBody.bind(this)}
          value={this.state.body}
          placeholder="Enter the post body"
        />
        <input
          className="add-post-input input-author"
          onChange={this.handleAuthor.bind(this)}
          value={this.state.author}
          placeholder="Enter the author" />
        <DropdownButton
          id={uuid()}
          options={categoryList}
          title={this.state.category ? this.state.category : 'Select a category'}
          placeholder="Enter the category"
          onSelect={(e, eventKey) => this.handleCategory(e, eventKey)}
        >
          {categoryList && categoryList.map(item => {
            return (
              <MenuItem key={uuid()}>{item}</MenuItem>
            )})}
        </DropdownButton>
        <Row className="add-post-icons">
          <Button
            className="add-post-icon"
            onClick={(e) => {
              this.validateForm(e);
              this.props.closeAddPost();
            }}
          ><MdAdd /></Button>
          <Button
            className="add-post-icon"
            onClick={() => this.props.closeAddPost()}
          ><MdExitToApp /></Button>
        </Row>
      </Form>
    )
  }
}

/*
<Button
  onClick={(e) => {this.handleSubmit(e)}}
>Add a new post</Button>
<Button
>Update the post</Button>
<Button
  onClick={() => this.props.closeAddPost()}
>Exit</Button>
<input
  size="60"
  className="input-body"
  onChange={this.handleBody.bind(this)}
  value={this.state.body}
  placeholder="Enter the post body" />
*/

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(add_post(post))
  }
}

export default connect(
  null, mapDispatchToProps
)(AddPost);
