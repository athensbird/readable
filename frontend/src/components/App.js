import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import categories from './categories';
import {
  fetchCategories,
  fetchPosts
} from '../utils/api';
import './App.css';

class App extends Component {
  state = {
    loadingCategories: false,
    loadingPosts: false,
    categories: null,
    posts: null
  }
  componentDidMount() {
    fetchCategories()
    .then((categories) => this.setState(() => ({
      categories: categories,
      loadingCategories: false
    })))
    fetchPosts()
    .then((posts) => this.setState(() => ({
      posts,
      loadingPosts: false
    })))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <categories />
        </p>
      </div>
    );
  }
}

export default App;
