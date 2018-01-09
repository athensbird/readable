import React, { Component }from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { load_posts } from '../actions';
import { Link } from "react-router-dom";

class Post extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    const postId = this.props.match.params.id;
    const post = this.props.posts.find(p => p.id === postId) || {};
    return (
      <div>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
        <p>{post.voteScore}</p>
        <p>{post.author}</p>
        <p>{post.commentCount}</p>
        <Link to={"/posts/"}>Back to list</Link>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    posts: state.post
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadPosts: () => dispatch(load_posts()),
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Post);
