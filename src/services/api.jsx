import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 7000
})


apiClient.interceptors.response.use(
  res => res,
  err => {
    console.error('API error:', err?.response?.data || err.message)
    return Promise.reject(err)
  }
)

export const getPosts = (course = '', page = 1, limit = 10) =>
  apiClient.get('/posts', { params: { course, page, limit } }).then(r => r.data.data)

export const getPost = id =>
  apiClient.get(`/posts/${id}`).then(r => r.data.data)


export const addComment = (postId, comment) =>
  apiClient.post(`/comments/${postId}`, comment).then(r => r.data.data)