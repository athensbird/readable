import React from 'react';
import { Link } from "react-router-dom";

function Category(props) {
  const { categories } = props;
  return (
    <div>
      <ul className="categories-list">
        {categories[0] && categories.map((category) => (
          <li key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Category;
