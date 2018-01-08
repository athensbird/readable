import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {
  addPost,
  load_posts,
  load_categories
} from '../actions';
import logo from './logo.svg';
import Category from './Category';
import Postlist from './Postlist';
import {
  fetchCategories,
  fetchPosts,
  fetchComments
} from '../utils/api';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }
  state = {
    loadingCategories: false,
    loadingPosts: false,
    loadingComments: false,
    categories: [],
    posts: [],
    comments: []
  }
  componentDidMount() {
    this.props.loadCategories();
    this.props.loadPosts();
    /*
    fetchCategories()
    .then((categories) => this.setState(() => ({
      categories: categories.categories,
      loadingCategories: false
    })));
    fetchPosts()
    .then((posts) => this.setState(() => ({
      posts,
      loadingPosts: false
    })));
    */
    // fetchComments()
    // .then(comments => this.setState(() => ({
    //   comments,
    //   loadingComments: false
    // })))
  }
  render() {
    const { categories, posts } = this.state;
    return (
      <div className="App">
        <Category categories={this.props.categories} />
        <Postlist posts={this.props.posts} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    posts: state.post,
    categories: state.category
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (id, timestamp, title, author, category) => dispatch(addPost(id, timestamp, title, author, category)),
    loadPosts: () => dispatch(load_posts()),
    loadCategories: () => dispatch(load_categories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
