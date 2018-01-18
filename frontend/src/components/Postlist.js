import React from 'react';
import Post from './Post';
import { Button } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import MdClear from 'react-icons/lib/md/clear';

function Postlist(props) {
  const { posts, deletePost, category } = props;
  return (
    <div className="post-list">
      <List>
        {posts.length > 0 && posts.filter((p) => p.category === category)
          .map((post) => (
          <ListItem key={post.id ? post.id : post.commentCount}>
            <p>
              <Link to={`/${post.category}/${post.id}`} className="post-title-link">{post.title}</Link>
              <Button
                className="master-delete-post-button"
                onClick={() => props.deletePost(post.id)}
              ><MdClear /></Button>
            </p>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Postlist;
