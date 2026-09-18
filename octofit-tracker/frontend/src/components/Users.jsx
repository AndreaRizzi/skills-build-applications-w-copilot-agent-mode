import ResourceView from './ResourceView.jsx'

// Codespaces endpoint pattern: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/
export default function Users() {
  return <ResourceView title="Users" description="Members building consistent routines." endpoint="/api/users/" columns={[{ key: 'displayName', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'profile', label: 'Profile' }]} />
}
