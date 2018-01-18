import React, { Component } from 'react';
import Postlist from './Postlist';
import { connect } from 'react-redux';
import {
  load_posts,
  load_categories,
  delete_post
} from '../actions';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import { Jumbotron, Button } from 'react-bootstrap';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import AddPostContainer from '../containers/AddPostContainer';
import sortBy from 'sort-by';

class PostByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    }
  }
  componentDidMount() {
    this.props.loadPosts();
    this.props.loadCategories();
  }
  sortByVote() {
    this.setState({
      posts: this.props.posts.sort(sortBy('-voteScore'))
    });
  }
  sortByTime() {
    this.setState({
      posts: this.props.posts.sort(sortBy('timestamp'))
    });
  }
  sortByTitle() {
    this.setState({
      posts: this.props.posts.sort(sortBy('title'))
    });
  }
  render() {
    const categoryName = this.props.match.params.category;
    const posts = this.props.post ? this.props.posts.filter(p => p.category === categoryName) : [];
    return (
      <div>
        <Jumbotron><h2>{`Let's learn about ${categoryName}`}</h2></Jumbotron>
        <AddPostContainer categories={this.props.categories} />
        <div className="sort-button-list">
          <h4 className="sort-button">Sort by</h4>
          <Button className="sort-button" onClick={() => {this.sortByVote()}}>VoteCount</Button>
          <Button className="sort-button" onClick={() => {this.sortByTime()}}>Time</Button>
          <Button className="sort-button" onClick={() => {this.sortByTitle()}}>Title</Button>
        </div>
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
    posts: state.post,
    categories: state.category
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(load_posts()),
    loadCategories: () => dispatch(load_categories()),
    deletePost: (id) => dispatch(delete_post(id))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PostByCategory);
