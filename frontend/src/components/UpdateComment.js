import React from 'react';
import Modal from 'react-modal'
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { update_comment } from '../actions';

class UpdateComment extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      body: this.props.comment.body
    };
  }
  validateUpdateComment(e) {
    e.preventDefault();
    let validated = true;
    console.log(typeof this.state.body);
    if (typeof this.state.body !== 'string' || !this.state.body) {
      alert('Invalid body!');
      validated = false;
    }
    if (validated) {
      this.handleSubmit(e);
      this.props.toggleUpdateComment();
    }
  }
  handleSubmit(e) {
    const { comment } = this.props;
    if (this.props.updateComment) {
      console.log('handle Comment Submit called!');
      this.props.updateComment(comment.id, this.state);
    }
  }
  handleBody(event) {
    this.setState({
      body: event.target.value
    });
  }
  render() {
    const { comment, toggleUpdateComment } = this.props;
    return (
      <Form onSubmit={(e) => this.validateUpdateComment(e)}>
        <input
          className="update-comment-input"
          onChange={this.handleBody.bind(this)}
          value={this.state.body} />
        <br />
        <Button onClick={(e) => this.validateUpdateComment(e)}>Update Comment</Button>
        <br />
        <br />
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateComment: (id, body) => dispatch(update_comment(id,body))
  }
}

export default connect(
  null, mapDispatchToProps
)(UpdateComment);
