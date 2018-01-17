import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { connect } from 'react-redux'
import {
  add_post,
  load_posts,
  delete_post,
  load_categories
} from '../actions';
import Category from './Category';
import PostByCategory from './PostByCategory';
import Postlist from './Postlist';
import Post from './Post';
import AddPost from './AddPost';
import AddPostContainer from '../containers/AddPostContainer';
import Navigation from './Navigation';
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
      <BrowserRouter>
        <div>
          <Navigation categories={this.props.categories} />
          <Switch>
            <Route path="/categories">
              <Category categories={this.props.categories} />
            </Route>
            <Route path="/:category/posts" component={PostByCategory} />
            <Route path="/posts/:id"
              exact
              component={Post}
            />
            <Route path="/">
              <div>
                <Category
                  categories={this.props.categories}
                  posts={this.props.posts}
                  deletePost={(id) => this.props.deletePost(id)}
                />
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
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
    loadCategories: () => dispatch(load_categories()),
    deletePost: (id) => dispatch(delete_post(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
