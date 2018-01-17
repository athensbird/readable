import React, { Component } from 'react';
import Post from './Post';
import PostlistDetail from './PostlistDetail';
import { Button } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List'
import { connect } from 'react-redux';
import sortBy from 'sort-by';

class PostlistGeneralContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortCriteria: 'timeStamp',
      posts: this.props.posts
    }
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
    const { posts, deletePost } = this.props;
    return (
      <div className="post-list">
        <div className="sort-button-list">
          <h4 className="sort-button">Sort by</h4>
          <Button className="sort-button" onClick={() => {this.sortByVote()}}>VoteCount</Button>
          <Button className="sort-button" onClick={() => {this.sortByTime()}}>Time</Button>
          <Button className="sort-button" onClick={() => {this.sortByTitle()}}>Title</Button>
        </div>
        <PostlistDetail posts={posts} deletePost={this.props.deletePost} />
      </div>
    )
  }
}

export default PostlistGeneralContainer;
