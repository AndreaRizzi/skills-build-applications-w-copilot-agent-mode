import ResourceView from './ResourceView.jsx'

// Codespaces endpoint pattern: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/
export default function Leaderboard() {
  return <ResourceView title="Leaderboard" description="Weekly momentum, ranked by points earned." endpoint="/api/leaderboard/" columns={[{ key: 'rank', label: 'Rank' }, { key: 'user', label: 'User' }, { key: 'points', label: 'Points' }, { key: 'period', label: 'Period' }]} />
}
