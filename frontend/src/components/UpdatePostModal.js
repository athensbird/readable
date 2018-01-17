import React from 'react';
import Modal from 'react-modal'
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-router-dom';

class UpdatePostModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body
    };
  }
  validatePostUpdate(e) {
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
    if (validated) {
      this.handleSubmit(e);
      this.props.toggleUpdatePost();
    }
  }
  handleSubmit(e) {
    const { post } = this.props;
    if (this.props.updatePost) {
      console.log('handle Submit called!');
      this.props.updatePost(post.id, this.state);
    }
  }
  handleTitle(event) {
    this.setState({
      title: event.target.value
    })
  }
  handleBody(event) {
    this.setState({
      body: event.target.value
    });
  }
  render() {
    const { post, toggleUpdatePost } = this.props;
    return (
      <Form onSubmit={(e) => this.validatePostUpdate(e)}>
        <input
          className="input-update-title"
          onChange={this.handleTitle.bind(this)}
          value={this.state.title} />
        <textarea
          className="input-update-body"
          onChange={this.handleBody.bind(this)}
          value={this.state.body} />
        <br />
        <Button onClick={(e) => this.validatePostUpdate(e)}>Update Post</Button>
      </Form>
    )
  }
}

export default UpdatePostModal;
