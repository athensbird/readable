import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap';
import UpdateComment from './UpdateComment';
import TiArrowSortedUp from 'react-icons/lib/ti/arrow-sorted-up';
import TiArrowSortedDown from 'react-icons/lib/ti/arrow-sorted-down';
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
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.voteScore}</p>
            <Button
              onClick={() => {
                props.changeCommentVote(comment.postId, comment.id, "upVote");
              }
            }><TiArrowSortedUp /></Button>
            <Button
              onClick={() => {
                props.changeCommentVote(comment.postId, comment.id, "downVote");
              }
            }><TiArrowSortedDown /></Button>
            <Button
              onClick={() => props.deleteComment(comment.id, comment.postId)}
            >Delete this comment</Button>
            <br />
            <br />
            <Button onClick={() => props.toggleUpdateComment()}>{props.updateCommentOpen ? <p>close</p> : <p>update</p>}</Button>
            {props.updateCommentOpen && <UpdateComment comment={comment} /> }
          </div> : null }
        </Jumbotron>
      ))}
    </div>
  );
}

export default CommentList;
