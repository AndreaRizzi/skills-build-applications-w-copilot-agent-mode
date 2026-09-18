import ResourceView from './ResourceView.jsx'

export default function Activities() {
  return <ResourceView title="Activities" description="Recent movement logged by the community." endpoint="/api/activities/" columns={[{ key: 'type', label: 'Activity' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'calories', label: 'Calories' }, { key: 'completedAt', label: 'Completed' }]} />
}
