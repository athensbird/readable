import React, { Component }from 'react';
import UpdatePostModal from './UpdatePostModal';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  load_posts,
  update_post,
  change_vote
} from '../actions';
import { Link } from "react-router-dom";
import TiArrowSortedUp from 'react-icons/lib/ti/arrow-sorted-up';
import TiArrowSortedDown from 'react-icons/lib/ti/arrow-sorted-down';
import './App.css'

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
        <Button
          onClick={() => {this.props.changeVote(post.id,"upVote")}}
        ><TiArrowSortedUp /></Button>
        <Button
        onClick={() => {
          if (post.voteScore > 0) {
          this.props.changeVote(post.id,"downVote")
        } else {
          console.log('Error: voteScore cannot be negative!');
        }}}
        ><TiArrowSortedDown /></Button>
        <p>author: {post.author}</p>
        <p>#comments: {post.commentCount}</p>
        <UpdatePostModal
          post={post}
          updatePost={(id, content) => this.props.updatePost(id,content)}
        />
        <Link to={"/"}>Back to list</Link>
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
    updatePost: (id, content) => dispatch(update_post(id, content)),
    changeVote: (id, option) => dispatch(change_vote(id, option))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Post);
