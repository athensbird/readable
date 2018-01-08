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

export function updatePost() {
  return fetch("http://localhost:3001/posts", {
    method: 'PUT',
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

// export function fetchComments() {
//   return fetch("http://localhost:3001/comments", headers)
//   .then(res => res.json())
// }
