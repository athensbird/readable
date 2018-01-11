const headers = {
  headers: {
    'Authorization' : 'OAuth2',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export function fetchCategories() {
  return fetch("http://localhost:3001/categories", headers)
  .then(res => res.json())
}

export function fetchPosts() {
  return fetch("http://localhost:3001/posts", headers)
  .then(res => res.json())
}

export function addPost(post) {
  return fetch("http://localhost:3001/posts", {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      method: 'POST',
      'Authorization' : 'OAuth2',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(res => {
    res.json()
  })
}

export function updatePost(id, content) {
  return fetch("http://localhost:3001/posts/" + id, {
    method: 'PUT',
    body: JSON.stringify(content),
    headers: headers.headers
  }).then(res => {
    res.json()
  })
}

export function deletePost(id) {
  return fetch("http://localhost:3001/posts/" + id, {
    method: 'DELETE',
    headers: headers.headers
  }).then(res => {
    res.json()
  })
}

export function changeVote(id, option) {
  return fetch("http://localhost:3001/posts/" + id, {
    method:'POST',
    body: JSON.stringify({'option': option}),
    headers: headers.headers
  }).then(res => {
    res.json()
  })
}

export function getCategoryPost(category) {
  return fetch("http://localhost:3001/" + category + "/posts", {
    method: 'GET',
    headers: headers.headers
  }).then(res => {
    res.json()
  })
}

export function fetchComments(postId) {
  return fetch("http://localhost:3001/posts/" + postId + "/comments", headers)
  .then(res => {
    return res.json();
  })
}

export function postComment(comment) {
  return fetch("http://localhost:3001/comments", {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: headers.headers
  }).then(res => {
    res.json()
  })
}

export function getSingleComment(id) {
  return fetch(`http://localhost:3001/comments/${id}`, {
    headers: headers.headers
  }).then(res => res.json())
}

export function changeCommentVote(id, option) {
  return fetch(`http://localhost:3001/comments/${id}`, {
    method:'POST',
    body: JSON.stringify({'option': option}),
    headers: headers.headers
  }).then(res => {
    res.json()
  })
}

export function updateComment(id, body) {
  return fetch(`http://localhost:3001/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: headers.headers
  }).then(res => res.json())
}

export function deleteComment(id) {
  return fetch(`http://localhost:3001/comments/${id}`, {
    method: 'DELETE',
    headers: headers.headers
  }).then(res => res.json())
}
