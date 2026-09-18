import ResourceView from './ResourceView.jsx'

// Codespaces endpoint pattern: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/
export default function Teams() {
  return <ResourceView title="Teams" description="Groups keeping one another moving." endpoint="/api/teams/" columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'Focus' }, { key: 'members', label: 'Members' }]} />
}
