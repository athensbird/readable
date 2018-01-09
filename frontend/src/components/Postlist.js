import React from 'react';
import Post from './Post';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function Postlist(props) {
  const { posts, deletePost, category } = props;
  return (
    <div>
      <ul className="post-list">
        {posts.length > 0 && posts.filter((p) => p.category === category)
          .map((post) => (
          <li key={post.id ? post.id : post.commentCount}>
            <Link to={"/posts/" + post.id}>{post.title}</Link>
            <br />
            <Button
              onClick={() => props.deletePost(post.id)}
            >Delete the post</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Postlist;

/*
<Post post={post} key={post.id}/>
*/
