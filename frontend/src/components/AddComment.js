import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  add_comment,
  change_comment_vote,
  delete_comment
} from '../actions';
import './App.css';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      timestamp: '',
      body: '',
      author: '',
      parentId: this.props.postId
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
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.addComment) {
      this.props.addComment(this.state);
    }
  }
  render() {
    const { addComment } = this.props;
    return (
      <div className="addComment">
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
          <Button
            onClick={(e) => {this.handleSubmit(e)}}
          >Add a new comment</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (comment) => dispatch(add_comment(comment))
  }
}

export default connect(
  null, mapDispatchToProps
)(AddComment);
