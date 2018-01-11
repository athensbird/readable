import {
  fetchPosts,
  fetchCategories,
  addPost,
  updatePost,
  deletePost,
  changeVote,
  fetchComments,
  postComment,
  getSingleComment,
  changeCommentVote,
  updateComment,
  deleteComment
} from '../utils/api';
import uuid from 'uuid';
export const ADD_POST = 'ADD_POST';
export const POSTS_LOADED = 'POSTS_LOADED';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';
export const COMMENTS_LOADED = 'COMMENTS_LOADED';
export const SINGLE_COMMENT_LOADED = 'SINGLE_COMMENT_LOADED';
export const REMOVE_SINGLE_COMMENT = 'REMOVE_SINGLE_COMMENT';

export function load_posts() {
  return function (dispatch) {
    fetchPosts().then((posts) => {
      dispatch(postsLoaded(posts));
      return;
    })
  }
}

export function commentsLoaded(comments) {
  return {
    type: COMMENTS_LOADED,
    comments
  }
}

export function single_comment_loaded(comment) {
  return {
    type: SINGLE_COMMENT_LOADED,
    comment
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
  const postBody = {
    ...post,
    id: uuid(),
    timestamp: Date.now()
  };
  return function (dispatch) {
    addPost(postBody).then((post) => {
      dispatch(load_posts());
      return;
    })
  }
}

export function delete_post(id) {
  return function (dispatch) {
    deletePost(id).then(() => {
      dispatch(load_posts());
      return;
    })
  }
}

export function change_vote(id, option) {
  return function (dispatch) {
    changeVote(id, option).then(() => {
      console.log(id, option);
      dispatch(load_posts());
    })
  }
}

export function change_comment_vote(postId, commentId, option) {
  return function (dispatch) {
    changeCommentVote(commentId, option).then(() => {
      dispatch(get_single_comment(commentId));
    })
  }
}

export function update_post(id, content) {
  return function (dispatch) {
    updatePost(id, content).then(() => {
      dispatch(load_posts());
      return;
    })
  }
}

export function load_comments(postId) {
  return function (dispatch) {
    fetchComments(postId).then((comments) => {
      dispatch(commentsLoaded(comments));
    })
  }
}


export function add_comment(comment) {
  const commentBody = {
    ...comment,
    id: uuid(),
    timestamp: Date.now()
  }
  return function (dispatch) {
    postComment(commentBody).then(() => {
      dispatch(load_comments(comment.parentId))
    });
  }
}

export function get_single_comment(id) {
  return function (dispatch) {
    getSingleComment(id).then((comment) => {
      dispatch(single_comment_loaded(comment));
    })
  }
}


export function delete_comment(id, postId) {
  return function (dispatch) {
    deleteComment(id).then((comment) => {
      dispatch(single_comment_loaded(comment));
    })
  }
}

export function update_comment(id, body) {
  const comment = {
    body: body.body,
    timestamp: Date.now()
  }
  return function (dispatch) {
    updateComment(id, comment).then((comment) => {
      dispatch(single_comment_loaded(comment));
    })
  }
}
