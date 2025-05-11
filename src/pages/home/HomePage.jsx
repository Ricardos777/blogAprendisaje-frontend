import { CourseFilter } from '../../components/blog/CourseFilter'
import { PostCard } from '../../components/blog/PostCard'
import { Loading } from '../../components/ui/Loading'
import { Error } from '../../components/ui/Error'
import { usePosts } from '../../shared/hooks/usePosts'

export const HomePage = () => {
  const { posts, loading, error, course, setCourse } = usePosts()

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 32 }}>
      <h1>Blog de Aprendizaje</h1>

      <CourseFilter current={course} onChange={setCourse} />

      {loading && <Loading />}
      {error && <Error message={error} />}

      {posts.map(p => (
        <PostCard key={p._id} post={p} />
      ))}
    </main>
  )
}
