import React from 'react';
import { Link } from 'react-router-dom';
import Postlist from './Postlist';
import AddPostContainer from '../containers/AddPostContainer';
import { Jumbotron } from 'react-bootstrap';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import "./App.css"

function Category(props) {
  const { categories, posts, deletePost } = props;
  return (
    <div>
      <Jumbotron>
        <p>Welcome to Readable! Hope you have fun.</p>
      </Jumbotron>
      <List className="category-list">
        {categories[0] && categories.map((category) => (
          <ListItem className="category-listitem" key={category.name}>
            <div>
              <Link to={`./${category.name}/posts`}><RaisedButton>{category.name}</RaisedButton></Link>
              <Postlist category={category.name} posts={props.posts} deletePost={props.deletePost} />
            </div>
          </ListItem>
        ))}
      </List>
      <AddPostContainer />
    </div>
  )
}

export default Category;
