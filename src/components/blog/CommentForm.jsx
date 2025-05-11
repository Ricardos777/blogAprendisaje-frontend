import { Loading } from '../ui/Loading'
import { useAddComment } from '../../shared/hooks/useAddComment'

export const CommentForm = ({ postId, onSaved }) => {
  const { form, errors, loading, handleChange, handleSubmit } =
    useAddComment(postId, onSaved)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label>Comentario</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
        />
        {errors.content && <span style={{ color: 'red' }}>{errors.content}</span>}
      </div>
      <button disabled={loading}>{loading ? 'Enviando…' : 'Agregar comentario'}</button>
      {loading && <Loading />}
    </form>
  )
}
