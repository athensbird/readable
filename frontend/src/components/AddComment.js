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
      body: '',
      author: '',
      parentId: this.props.postId
    }
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
  validateCommentForm(e) {
    e.preventDefault();
    let validated = true;
    if (typeof this.state.author !== 'string' || !this.state.author) {
      alert('Invalid author!');
      validated = false;
    }
    if (typeof this.state.body !== 'string' || !this.state.body) {
      alert('Invalid body!');
      validated = false;
    }
    if (validated) {this.handleSubmit(e)};
  }
  handleSubmit(e) {
    if (this.props.addComment) {
      this.props.addComment(this.state);
    }
    this.props.toggleAddComment();
  }
  render() {
    const { addComment, toggleAddComment } = this.props;
    return (
      <div className="addComment">
        <Form onSubmit={(e) => {
          this.validateCommentForm(e);
        }}>
          <input
            className="add-comment-input-author"
            onChange={this.handleAuthor.bind(this)}
            value={this.state.author}
            placeholder="Enter the author" />
          <input
            className="add-comment-input-body"
            onChange={this.handleBody.bind(this)}
            value={this.state.body}
            placeholder="Enter the post body" />
          <Button
            className="add-new-comment-button"
            onClick={(e) => {this.validateCommentForm(e)}}
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
