import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state.post
  }
}

export default connect(
  mapStateToProps, null
)(Post);
