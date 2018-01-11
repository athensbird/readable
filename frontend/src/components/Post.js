import React, { Component }from 'react';
import UpdatePostModal from './UpdatePostModal';
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  load_posts,
  update_post,
  change_vote,
  load_comments,
  change_comment_vote,
  delete_comment
} from '../actions';
import { Link } from "react-router-dom";
import TiArrowSortedUp from 'react-icons/lib/ti/arrow-sorted-up';
import TiArrowSortedDown from 'react-icons/lib/ti/arrow-sorted-down';
import './App.css'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPosts: false
    };
  }
  componentDidMount() {
    this.props.loadPosts();
    this.props.loadComments(this.props.match.params.id);
    this.setState({
      loadingPosts: true
    });
  }
  render() {
    const postId = this.props.match.params.id;
    const post = this.state.loadingPosts ? this.props.posts.find(p => p.id === postId) : {};
    const comments = this.props.comments.commentList.filter(c => c.parentId === postId)
    return (
      <div>
        <h2>title: {post.title}</h2>
        <h3>content: {post.body}</h3>
        <p>voteScore: {post.voteScore}</p>
        <Button
          onClick={() => {
            this.props.changeVote(post.id,"upVote");
          }}
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
        <CommentList
          comments={comments}
          changeCommentVote={(postId, commentId, option) => this.props.changeCommentVote(postId,commentId,option)}
          deleteComment={(id, postId) => this.props.deleteComment(id, postId)}
          loadComments={(id) => this.props.loadComments(id)}
        />
        <AddComment postId={postId}/>
        <Link to={"/"}>Back to list</Link>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    posts: state.post,
    comments: state.comment
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadPosts: () => dispatch(load_posts()),
    updatePost: (id, content) => dispatch(update_post(id, content)),
    changeVote: (id, option) => dispatch(change_vote(id, option)),
    loadComments: (id) => dispatch(load_comments(id)),
    changeCommentVote: (postId, commentId, option) => dispatch(change_comment_vote(postId, commentId, option)),
    deleteComment: (id, postId) => dispatch(delete_comment(id, postId))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Post);
