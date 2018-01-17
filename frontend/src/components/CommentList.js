import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap';
import UpdateComment from './UpdateComment';
import TiArrowSortedUp from 'react-icons/lib/ti/arrow-sorted-up';
import TiArrowSortedDown from 'react-icons/lib/ti/arrow-sorted-down';
import FaEdit from 'react-icons/lib/fa/edit';
import MdClear from 'react-icons/lib/md/clear';
import './App.css';

function CommentList(props) {
  const {
    comments,
    fetchComments,
    changeCommentVote,
    deleteComment,
    toggleUpdateComment ,
    updateCommentOpen
  } = props;
  return (
    <div className="comment">
      {comments.map(comment => (
        <Jumbotron key={comment.id}>
          {!comment.deleted ? <div>
            <p className="comment-author">{comment.author}</p>
            <p className="comment-vote">{comment.voteScore}</p>
            <Button
              className="comment-button"
              onClick={() => {
                props.changeCommentVote(comment.postId, comment.id, "upVote");
              }
            }><TiArrowSortedUp /></Button>
            <Button
              className="comment-button"
              onClick={() => {
                props.changeCommentVote(comment.postId, comment.id, "downVote");
              }
            }><TiArrowSortedDown /></Button>
            <Button
              className="comment-button"
              onClick={() => props.deleteComment(comment.id, comment.postId)}
            ><MdClear /></Button>
            <Button
              className="comment-button"
              onClick={() => props.toggleUpdateComment()}
            ><FaEdit /></Button>
            {props.updateCommentOpen && <UpdateComment comment={comment} /> }
            <p>{comment.body}</p>
          </div> : null }
        </Jumbotron>
      ))}
    </div>
  );
}

export default CommentList;
