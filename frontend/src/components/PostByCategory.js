import React, { Component } from 'react';
import Postlist from './Postlist';
import { connect } from 'react-redux';
import {
  load_posts,
  delete_post
} from '../actions';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import { Jumbotron, Button } from 'react-bootstrap';
import MdArrowBack from 'react-icons/lib/md/arrow-back'

class PostByCategory extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    const categoryName = this.props.match.params.category;
    const posts = this.props.post ? this.props.posts.filter(p => p.category === categoryName) : [];
    return (
      <div>
        <Jumbotron><h2>{`Let's learn about ${categoryName}`}</h2></Jumbotron>
        <List>
          <Postlist category={categoryName} posts={this.props.posts} deletePost={this.props.deletePost} />
        </List>
        <Link to={'/'} className="home"><Button><MdArrowBack /></Button></Link>
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
