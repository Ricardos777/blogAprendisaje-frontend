export const CommentList = ({ comments }) => (
  <section>
    <h3>Comentarios ({comments.length})</h3>
    {comments.length === 0 && <p>Sin comentarios.</p>}
    {comments.map(c => (
      <article key={c._id} style={{ borderTop: '1px solid #eee', paddingTop: 8 }}>
        <p style={{ margin: 0 }}>
          <strong>{c.name}</strong> – {new Date(c.createdAt).toLocaleDateString()}
        </p>
        <p style={{ margin: 0 }}>{c.content}</p>
      </article>
    ))}
  </section>
)
