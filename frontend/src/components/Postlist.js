import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

function Postlist(props) {
  const { posts, addPost } = props;
  return (
    <ul className="post-list">
      {posts.length > 0 && posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
}

export default Postlist;
