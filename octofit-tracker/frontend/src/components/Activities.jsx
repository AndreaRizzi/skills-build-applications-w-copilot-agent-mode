import ResourceView from './ResourceView.jsx'

// Codespaces endpoint pattern: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
export default function Activities() {
  return <ResourceView title="Activities" description="Recent movement logged by the community." endpoint="/api/activities/" columns={[{ key: 'type', label: 'Activity' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'calories', label: 'Calories' }, { key: 'completedAt', label: 'Completed' }]} />
}
