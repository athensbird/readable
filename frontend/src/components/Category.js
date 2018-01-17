import React from 'react';
import { Link } from 'react-router-dom';
import Postlist from './Postlist';
import PostlistGeneralContainer from './PostlistGeneralContainer';
import AddPostContainer from '../containers/AddPostContainer';
import { Jumbotron } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import "./App.css"

function Category(props) {
  const { categories, posts, deletePost } = props;
  let i = 0;
  return (
    <div>
      <Jumbotron>
        <p>Welcome to Readable! Hope you have fun.</p>
      </Jumbotron>
      <AddPostContainer categories={categories} />
      <List className="category-list">
        <PostlistGeneralContainer posts={props.posts} deletePost={props.deletePost} />
      </List>
    </div>
  )
}

export default Category;

/*
{categories[0] && categories.map((category) => (
  <ListItem className="category-listitem" key={category.name}>
    <div>
      <Link to={`./${category.name}/posts`}><RaisedButton>{category.name}</RaisedButton></Link>
      <Postlist category={category.name} posts={props.posts} deletePost={props.deletePost} />
    </div>
  </ListItem>
))}
*/
