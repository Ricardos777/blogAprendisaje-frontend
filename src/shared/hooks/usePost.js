import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../services'

export const usePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getPost(id)
      setPost(data)
    } catch {
      setError('Publicación no encontrada')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { post, loading, error, refetch: fetch }
}
