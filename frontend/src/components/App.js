import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {
  add_post,
  load_posts,
  load_categories
} from '../actions';
import logo from './logo.svg';
import Category from './Category';
import Postlist from './Postlist';
import AddPost from './AddPost';
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
  }
  render() {
    const { categories, posts } = this.state;
    return (
      <div className="App">
        <Category categories={this.props.categories} />
        <Postlist
          posts={this.props.posts}
        />
        <AddPost />
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
    loadPosts: () => dispatch(load_posts()),
    loadCategories: () => dispatch(load_categories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
