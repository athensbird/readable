import React from 'react';
import { Link } from 'react-router-dom';
import Postlist from './Postlist';
import AddPostContainer from '../containers/AddPostContainer';

function Category(props) {
  const { categories, posts, deletePost } = props;
  return (
    <div>
      <ul className="categories-list">
        {categories[0] && categories.map((category) => (
          <li key={category.name}>
            <div>
              <Link to={`./${category.name}/posts`}>{category.name}</Link>
              <Postlist category={category.name} posts={props.posts} deletePost={props.deletePost} />
            </div>
          </li>
        ))}
      </ul>
      <AddPostContainer />
    </div>
  )
}

export default Category;
