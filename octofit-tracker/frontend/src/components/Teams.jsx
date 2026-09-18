import ResourceView from './ResourceView.jsx'

export default function Teams() {
  return <ResourceView title="Teams" description="Groups keeping one another moving." endpoint="/api/teams/" columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'Focus' }, { key: 'members', label: 'Members' }]} />
}
