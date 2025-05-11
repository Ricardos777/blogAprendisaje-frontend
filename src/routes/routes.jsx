import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/home/HomePage'
import { PostPage } from '../pages/post/PostPage'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="*" element={<p style={{ textAlign: 'center' }}>404</p>} />
    </Routes>
  </BrowserRouter>
)
