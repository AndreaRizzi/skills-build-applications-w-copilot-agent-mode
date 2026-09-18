import ResourceView from './ResourceView.jsx'

export default function Leaderboard() {
  return <ResourceView title="Leaderboard" description="Weekly momentum, ranked by points earned." endpoint="leaderboard" columns={[{ key: 'rank', label: 'Rank' }, { key: 'user', label: 'User' }, { key: 'points', label: 'Points' }, { key: 'period', label: 'Period' }]} />
}
