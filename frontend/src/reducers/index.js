import { combineReducers } from 'redux'

import {
  ADD_POST,
  POSTS_LOADED,
  CATEGORIES_LOADED,
  COMMENTS_LOADED,
  SINGLE_COMMENT_LOADED
} from '../actions';

const initialCommentList = {
  commentList: [],
  commentId: []
};

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
      return action.categories
    default:
      return state;
  }
}

function comment (state = initialCommentList, action) {
  switch (action.type) {
    case COMMENTS_LOADED:
      console.log(action);
      return {
        ...state,
        commentList: state.commentList.concat(action.comments.filter(c => {
          return state.commentId.includes(c.id) === false;
        })),
        commentId: state.commentId.concat(action.comments.filter(c => {
          return state.commentId.includes(c.id) === false;
        }).map(c => c.id))
      }
    case SINGLE_COMMENT_LOADED:
      console.log(action.comment);
      const updatedComments = state.commentList.map(c => {
        if (c.id === action.comment.id) {
          return action.comment;
        } else { return c;}
      });
      return {
        ...state,
        commentList: updatedComments
      }
    default:
      return state;
  }
}

export default combineReducers({
  post,
  category,
  comment
})
