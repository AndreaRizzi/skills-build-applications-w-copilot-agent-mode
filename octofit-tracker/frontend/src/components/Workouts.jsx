import ResourceView from './ResourceView.jsx'

// Codespaces endpoint pattern: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
export default function Workouts() {
  return <ResourceView title="Workouts" description="Suggested sessions for every training level." endpoint="/api/workouts/" columns={[{ key: 'title', label: 'Workout' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'exercises', label: 'Exercises' }]} />
}
