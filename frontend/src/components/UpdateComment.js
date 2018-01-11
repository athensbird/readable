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
  handleSubmit(e) {
    e.preventDefault();
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
    const { comment } = this.props;
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        Body: <input
          onChange={this.handleBody.bind(this)}
          value={this.state.body} />
        <br />
        <Button onClick={(e) => this.handleSubmit(e)}>Update Comment</Button>
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
