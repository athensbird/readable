import {
  fetchPosts,
  fetchCategories,
  addPost
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

export function add_post(post) {
  return function (dispatch) {
    addPost(post).then((post) => {
      dispatch(load_posts());
      return;
    })
  }
}
