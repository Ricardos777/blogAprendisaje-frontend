import { Link } from 'react-router-dom'

export const PostCard = ({ post }) => (
  <article
    style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginBottom: 16 }}
  >
    <h2>{post.title}</h2>
    <p>
      <small>
        {post.course} · {new Date(post.createdAt).toLocaleDateString()}
      </small>
    </p>
    <p>{post.content.slice(0, 120)}…</p>
    <Link to={`/post/${post._id}`}>Leer más</Link>
  </article>
)
