import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Home.css'

const features = [
  { title: 'AI Assistant',  icon: '🤖', desc: 'Ask anything about campus life', path: '/ai-chat' },
  { title: 'Announcements', icon: '📢', desc: 'Latest news and updates',        path: '/announcements' },
  { title: 'Events',        icon: '📅', desc: 'Upcoming campus events',          path: '/events' },
  { title: 'Campus Map',    icon: '🗺️', desc: 'Find buildings and rooms',        path: null },
  { title: 'Library',       icon: '📚', desc: 'Books, resources, reservations',  path: null },
  { title: 'Cafeteria',     icon: '🍽️', desc: "Today's menu and schedule",       path: null },
]

function Home() {
  const [serverStatus, setServerStatus] = useState('Checking...')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setServerStatus(res.data.message))
      .catch(() => setServerStatus('Backend not running'))
  }, [])

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to CampusApp 🎓</h1>
        <p>Your all-in-one campus companion</p>
        <div className="status-badge">
          <span className="dot"></span>
          {serverStatus}
        </div>
      </div>

      <div className="features-grid">
        {features.map((f) => (
          <div
            className={`feature-card ${f.path ? 'clickable' : 'disabled'}`}
            key={f.title}
            onClick={() => f.path && navigate(f.path)}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            {f.path
              ? <span className="card-btn">Open →</span>
              : <span className="card-btn coming-soon">Coming soon</span>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
