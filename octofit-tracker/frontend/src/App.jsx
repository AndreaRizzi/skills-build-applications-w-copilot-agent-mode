import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { apiBaseUrl } from './api.js'
import './App.css'

const navigation = [
  { to: '/', label: 'Overview', end: true },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
]

function Overview() {
  return (
    <section className="overview-panel">
      <p className="eyebrow">Your training desk</p>
      <h2>Make today count.</h2>
      <p className="lead-copy">Track the small wins, find your people, and keep your next workout close.</p>
      <div className="overview-grid">
        <NavLink to="/activities" className="overview-link"><span>01</span><strong>Log movement</strong><small>See the latest activities</small></NavLink>
        <NavLink to="/leaderboard" className="overview-link"><span>02</span><strong>Check momentum</strong><small>Find your place this week</small></NavLink>
        <NavLink to="/workouts" className="overview-link"><span>03</span><strong>Choose a session</strong><small>Pick your next challenge</small></NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink to="/" className="brand" aria-label="OctoFit home">
          <img src="/octofitapp-small.png" alt="" />
          <span>OctoFit <em>tracker</em></span>
        </NavLink>
        <div className="connection-status"><span /> API online <small>{apiBaseUrl}</small></div>
      </header>
      <div className="app-layout">
        <aside className="sidebar">
          <p className="nav-label">Workspace</p>
          <nav aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>
            ))}
          </nav>
          <p className="sidebar-note">Built for steady progress.<br />Keep showing up.</p>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
