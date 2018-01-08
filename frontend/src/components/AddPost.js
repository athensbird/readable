import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { add_post } from '../actions';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    id: '',
    timestamp: '',
    title: '',
    body: '',
    author: '',
    category: ''
    }
  }
  handleId(event) {
    this.setState({
      id: event.target.value
    });
  }
  handleTimestamp(event) {
    this.setState({
      timestamp: event.target.value
    });
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
    console.log('handleSubmit called!');
    e.preventDefault();
    if (this.props.addPost) {
      this.props.addPost(this.state);
    }
  }
  render() {
    return (
      <Form onSubmit={(e) => {
        this.handleSubmit(e);
      }}>
        Id: <input
          onChange={this.handleId.bind(this)}
          value={this.state.id}
          placeholder="Enter the id" />
        <br />
        Timestamp: <input
          onChange={this.handleTimestamp.bind(this)}
          value={this.state.timestamp}
          placeholder="Enter the timestamp" />
        <br />
        Title: <input
          onChange={this.handleTitle.bind(this)}
          value={this.state.title}
          placeholder="Enter the id" />
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
