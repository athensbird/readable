import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { connect } from 'react-redux'
import {
  add_post,
  load_posts,
  delete_post,
  load_categories
} from '../actions';
import Modal from 'react-modal'
import Category from './Category';
import Postlist from './Postlist';
import Post from './Post';
import AddPost from './AddPost';
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
    addPostModalOpen: false,
    categories: [],
    posts: [],
    comments: []
  }
  openAddPostModel() {
    this.setState({
      addPostModalOpen: true
    });
  }
  closeAddPostModel() {
    this.setState({
      addPostModalOpen: false
    })
  }
  componentWillMount() {
    Modal.setAppElement('body');
 }
  componentDidMount() {
    this.props.loadCategories();
    this.props.loadPosts();
  }
  render() {
    const { categories, posts, addPostModalOpen } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/categories">
              <Category categories={this.props.categories} />
            </Route>
            <Route path="/posts" exact>
              <Postlist
                posts={this.props.posts}
                deletePost={(id) => this.props.deletePost(id)}
              />
            </Route>
            <Route path="/posts/:id"
              exact
              component={Post}
            />
            <Route path="/addpost" exact>
              <div>
                <button onClick={() => this.openAddPostModel()}>
                  Add a post!
                </button>
                <br/>
                <Link to={'/'}>Home</Link>
                <Modal
                  className='modal'
                  overlayClassName='overlay'
                  isOpen={addPostModalOpen}
                  onRequestClose={this.closeAddPostModel}
                  contentLabel='Modal'
                >
                  <AddPost
                    closeAddPost={() => this.closeAddPostModel()}
                  />
                </Modal>
            </div>
            </Route>
            <Route path="/" component={Navigation} />
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

/*
<div className="App">
  <Category categories={this.props.categories} />
  <button onClick={() => this.openAddPostModel()}>
    Add a post!
  </button>
  <Modal
    className='modal'
    overlayClassName='overlay'
    isOpen={addPostModalOpen}
    onRequestClose={this.closeAddPostModel}
    contentLabel='Modal'
  >
    <AddPost
      closeAddPost={() => this.closeAddPostModel()}
    />
  </Modal>
</div>
*/
