import React, { Component } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { add_post } from '../actions';
import { RaisedButton } from 'material-ui/List'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
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
  handleCategory(event) {
    this.setState({
      category: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.addPost) {
      this.props.addPost(this.state);
    }
  }
  render() {
    const { closeAddPost, deletePost, updatePost } = this.props;
    return (
      <Form onSubmit={(e) => {
        this.handleSubmit(e);
      }}>
        <input
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
        <input
          className="add-post-input input-category"
          onChange={this.handleCategory.bind(this)}
          value={this.state.category}
          placeholder="Enter the category" />
        <Row className="add-post-icons">
          <Button
            className="add-post-icon"
            onClick={(e) => {
              this.handleSubmit(e);
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
