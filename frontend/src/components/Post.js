import React, { Component }from 'react';
import UpdatePostModal from './UpdatePostModal';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  load_posts,
  update_post
} from '../actions';
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
        <h2>title: {post.title}</h2>
        <h3>content: {post.body}</h3>
        <p>voteScore: {post.voteScore}</p>
        <p>author: {post.author}</p>
        <p>#comments: {post.commentCount}</p>
        <UpdatePostModal
          post={post}
          updatePost={(id, content) => this.props.updatePost(id,content)}
        />
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
    updatePost: (id, content) => dispatch(update_post(id, content))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Post);
