import { useState } from 'react'
import { addComment } from '../../services'
import { validateComment } from '../validators/commentValidator'

export const useAddComment = (postId, onSuccess) => {
  const [form, setForm] = useState({ name: '', content: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const vErrors = validateComment(form)
    setErrors(vErrors)
    if (Object.keys(vErrors).length) return

    setLoading(true)
    await addComment(postId, form)
    setLoading(false)
    setForm({ name: '', content: '' })
    onSuccess?.()
  }

  return { form, errors, loading, handleChange, handleSubmit }
}
