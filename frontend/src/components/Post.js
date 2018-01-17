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
import MdArrowBack from 'react-icons/lib/md/arrow-back'
import FaEdit from 'react-icons/lib/fa/edit'
import './Post.css'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPosts: true,
      updatePostModalOpen: false,
      addCommentOpen: false,
      updateCommentOpen: false
    };
  }
  componentDidMount() {
    this.props.loadPosts();
    console.log('Post loaded!')
    this.props.loadComments(this.props.match.params.id);
    this.setState({
      loadingPosts: false
    });
  }
  toggleUpdateModal() {
    this.setState({
      updatePostModalOpen: !this.state.updatePostModalOpen
    });
  }
  toggleAddComment() {
    this.setState({
      addCommentOpen: !this.state.addCommentOpen
    });
  }
  toggleUpdateComment() {
    this.setState({
      updateCommentOpen: !this.state.updateCommentOpen
    });
  }
  render() {
    const postId = this.props.match.params.id;
    const post = this.props.posts[0] ? this.props.posts.find(p => p.id === postId) : {};
    const comments = this.props.comments.commentList.filter(c => c.parentId === postId)
    return (
      <div className="post">
        {this.state.loadingPosts ? <p>loading</p> :
          <div>
            <div className="vote-section">
              <h2>{post.title}</h2>
              <h5>{post.voteScore}</h5>
                <Button
                  className="vote-button"
                  onClick={() => {
                    this.props.changeVote(post.id,"upVote");
                  }}
                ><TiArrowSortedUp /></Button>
                <Button
                  className="vote-button"
                  onClick={() => {
                    if (post.voteScore > 0) {
                    this.props.changeVote(post.id,"downVote")
                  } else {
                    console.log('Error: voteScore cannot be negative!');
                  }}}
                ><TiArrowSortedDown /></Button>
                <Button
                  onClick={() => {this.toggleUpdateModal()}}
                  className="vote-button"
                >
                  <FaEdit />
                </Button>
                <p className="post-author">By {post.author}</p>
            </div>
            <p className="post-body">{post.body}</p>
            {this.state.updatePostModalOpen &&
              <UpdatePostModal
                post={post}
                updatePost={(id, content) => this.props.updatePost(id,content)}
                toggleUpdatePost = {() => this.toggleUpdateModal()}
              />}
            <CommentList
              comments={comments}
              changeCommentVote={(postId, commentId, option) => this.props.changeCommentVote(postId,commentId,option)}
              deleteComment={(id, postId) => this.props.deleteComment(id, postId)}
              loadComments={(id) => this.props.loadComments(id)}
              toggleUpdateComment={() => this.toggleUpdateComment()}
              updateCommentOpen={this.state.updateCommentOpen}
            />
            <Button
              className="add-comment-button"
              onClick={() => this.toggleAddComment()}>{this.state.addCommentOpen ? <p>Close</p> : <p>Add a comment</p>}
            </Button>
            {this.state.addCommentOpen && <AddComment postId={postId}/>}
          </div>
        }
        <Link to={"/"}><Button className="back-button"><MdArrowBack /></Button></Link>
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
