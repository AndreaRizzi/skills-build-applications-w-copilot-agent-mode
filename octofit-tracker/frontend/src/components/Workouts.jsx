import ResourceView from './ResourceView.jsx'

export default function Workouts() {
  return <ResourceView title="Workouts" description="Suggested sessions for every training level." endpoint="workouts" columns={[{ key: 'title', label: 'Workout' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'exercises', label: 'Exercises' }]} />
}
