import {
  fetchPosts,
  fetchCategories
} from '../utils/api';
export const ADD_POST = 'ADD_POST';
export const POSTS_LOADED = 'POSTS_LOADED';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';


export function load_posts() {
  return function (dispatch) {
    fetchPosts().then((posts) => {
      console.log(posts);
      dispatch(postsLoaded(posts));
      return;
    })
  }
}

export function postsLoaded(posts) {
  console.log("posts loaded!");
  return {
    type: POSTS_LOADED,
    posts
  }
}

export function load_categories() {
  return function (dispatch) {
    fetchCategories().then((categories) => {
      dispatch(categoriesLoaded(categories));
      return;
    })
  }
}

export function categoriesLoaded(categories) {
  return {
    type: CATEGORIES_LOADED,
    categories: categories.categories
  }
}

export function addPost({id, timestamp, title, body, author, category}) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}
