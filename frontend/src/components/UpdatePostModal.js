import React from 'react';
import Modal from 'react-modal'
import { Form, Button } from 'react-bootstrap';

class UpdatePostModal extends React.Component {
  constructor(props) {
    super(props);
    const { post } = this.props;
    this.state = {
      title: post.title,
      body: post.body
    };
  }
  handleSubmit(e) {
    e.preventDefault();
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
    const { post } = this.props;
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        Title: <input
          onChange={this.handleTitle.bind(this)}
          value={this.state.title} />
          <br />
        Body: <input
          onChange={this.handleBody.bind(this)}
          value={this.state.body} />
        <br />
        <Button onClick={(e) => this.handleSubmit(e)}>Submit</Button>
      </Form>
    )
  }
}

export default UpdatePostModal;