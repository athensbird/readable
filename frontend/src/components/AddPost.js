import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { add_post } from '../actions';

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
        Title: <input
          onChange={this.handleTitle.bind(this)}
          value={this.state.title}
          placeholder="Enter the title" />
        <br />
        Body: <input
          onChange={this.handleBody.bind(this)}
          value={this.state.body}
          placeholder="Enter the post body" />
        <br />
        Author: <input
          onChange={this.handleAuthor.bind(this)}
          value={this.state.author}
          placeholder="Enter the author" />
        <br />
        Category: <input
          onChange={this.handleCategory.bind(this)}
          value={this.state.category}
          placeholder="Enter the category" />
        <br />
        <Button
          onClick={(e) => {this.handleSubmit(e)}}
        >Add a new post</Button>
        <Button
        >Update the post</Button>
        <Button
          onClick={() => this.props.closeAddPost()}
        >Exit</Button>
      </Form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(add_post(post))
  }
}

export default connect(
  null, mapDispatchToProps
)(AddPost);
