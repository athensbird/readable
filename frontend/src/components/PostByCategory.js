import React, { Component } from 'react';
import Postlist from './Postlist';
import { connect } from 'react-redux';
import {
  load_posts,
  delete_post
} from '../actions';
import { Link } from 'react-router-dom';

class PostByCategory extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    const categoryName = this.props.match.params.category;
    const posts = this.props.posts.filter(p => p.category === categoryName);
    return (
      <div>
        <ul>
          <Postlist category={categoryName} posts={this.props.posts} deletePost={this.props.deletePost} />
        </ul>
        <Link to={'/'}>Home</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(load_posts()),
    deletePost: (id) => dispatch(delete_post(id))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PostByCategory);
