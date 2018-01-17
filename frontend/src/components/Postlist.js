import React from 'react';
import Post from './Post';
import { Button } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function Postlist(props) {
  const { posts, deletePost, category } = props;
  return (
    <div>
      <List>
        {posts.length > 0 && posts.filter((p) => p.category === category)
          .map((post) => (
          <ListItem key={post.id ? post.id : post.commentCount}>
            <Link to={"/posts/" + post.id}>{post.title}</Link>
            <br />
            <Button
              className="master-delete-post-button"
              onClick={() => props.deletePost(post.id)}
            >Delete the post</Button>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Postlist;

/*
<Post post={post} key={post.id}/>
*/
