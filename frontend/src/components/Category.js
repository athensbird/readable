import React from 'react';

function Category(props) {
  const { categories } = props;
  console.log(categories);
  return (
    // <h1>test</h1>
    <ul className="categories-list">
      {categories[0] && categories.map((category) => (
        <li key={category.name}>
          {category.name}
        </li>
      ))}
    </ul>
  )
}

export default Category;
