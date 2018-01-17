import React from 'react';
import { Link } from "react-router-dom";
import MdClear from 'react-icons/lib/md/clear';
import { Button } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List'

function PostlistDetail(props) {
  const { posts, deletePost } = props;
  return (
    <List>
      {posts.length > 0 && posts.map((post) => (
        <ListItem key={post.id ? post.id : post.commentCount}>
          <p>
            <Link to={"/posts/" + post.id} className="post-title-link">{post.title}</Link>
            <Button
              className="master-delete-post-button"
              onClick={() => props.deletePost(post.id)}
            ><MdClear /></Button>
          </p>
        </ListItem>
      ))}
    </List>
  );
}

export default PostlistDetail;
