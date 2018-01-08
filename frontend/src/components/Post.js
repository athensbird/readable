import React from 'react';
import { Button } from 'react-bootstrap';

function Post(props) {
  const { post } = props;
  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
      <p>{post.voteScore}</p>
      <p>{post.author}</p>
      <p>{post.commentCount}</p>
    </div>
  );
}

export default Post;
