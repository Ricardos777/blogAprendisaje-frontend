import { useEffect, useState, useCallback } from 'react'
import { getPosts } from '../../services'

export const usePosts = () => {
  const [course, setCourse] = useState('')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getPosts(course)
      setPosts(data)
    } catch {
      setError('No se pudieron cargar las publicaciones')
    } finally {
      setLoading(false)
    }
  }, [course])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { posts, loading, error, course, setCourse }
}
