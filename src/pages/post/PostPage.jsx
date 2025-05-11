import { Link } from 'react-router-dom'
import { Loading } from '../../components/ui/Loading'
import { Error } from '../../components/ui/Error'
import { CommentForm } from '../../components/blog/CommentForm'
import { CommentList } from '../../components/blog/CommentList'
import { usePost } from '../../shared/hooks/usePost'

export const PostPage = () => {
  const { post, loading, error, refetch } = usePost()

  if (loading) return <Loading />
  if (error) return <Error message={error} />
  if (!post) return null

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 32 }}>
      <Link to="/">← Volver</Link>

      <h2>{post.title}</h2>
      <p>
        <small>
          {post.course} · {new Date(post.createdAt).toLocaleDateString()}
        </small>
      </p>
      <p>{post.content}</p>

      <hr />

      <CommentForm postId={post._id} onSaved={refetch} />
      <CommentList comments={post.comments || []} />
    </main>
  )
}
