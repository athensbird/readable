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

export function fetchComments() {
  return fetch("http://localhost:3001/comments", headers)
  .then(res => res.json())
}
