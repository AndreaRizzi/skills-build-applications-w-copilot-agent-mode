import ResourceView from './ResourceView.jsx'

export default function Users() {
  return <ResourceView title="Users" description="Members building consistent routines." endpoint="users" columns={[{ key: 'displayName', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'profile', label: 'Profile' }]} />
}
