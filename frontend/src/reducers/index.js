import { combineReducers } from 'redux'

import {
  ADD_POST,
  POSTS_LOADED,
  CATEGORIES_LOADED
} from '../actions';

function post (state = {}, action) {
  switch (action.type) {
    case POSTS_LOADED:
      return action.posts;
    case ADD_POST:
      const { id, timestamp, title, body, author, category } = action;
      return {
        ...state,
        [post.id]: id,
        [post.timestamp]: timestamp,
        [post.title]: title,
        [post.author]: author,
        [post.category]: category
      }
    default:
      return state;
  }
}

function category (state = [], action) {
  switch (action.type) {
    case CATEGORIES_LOADED:
      return action.categories;
    default:
      return state;
  }
}

export default combineReducers({
  post,
  category
})
