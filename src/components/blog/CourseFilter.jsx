import { COURSES } from '../../shared/validators/courseEnum'

export const CourseFilter = ({ current, onChange }) => (
  <div style={{ marginBottom: 16, textAlign: 'center' }}>
    <button onClick={() => onChange('')} disabled={current === ''}>
      Todas
    </button>
    {COURSES.map(c => (
      <button
        key={c}
        style={{ marginLeft: 8 }}
        onClick={() => onChange(c)}
        disabled={current === c}
      >
        {c}
      </button>
    ))}
  </div>
)
