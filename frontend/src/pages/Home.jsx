import { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'

const features = [
  { title: 'AI Assistant',    icon: '🤖', desc: 'Ask anything about campus life' },
  { title: 'Announcements',   icon: '📢', desc: 'Latest news and updates' },
  { title: 'Events',          icon: '📅', desc: 'Upcoming campus events' },
  { title: 'Campus Map',      icon: '🗺️', desc: 'Find buildings and rooms' },
  { title: 'Library',         icon: '📚', desc: 'Books, resources, reservations' },
  { title: 'Cafeteria',       icon: '🍽️', desc: "Today's menu and schedule" },
]

function Home() {
  const [serverStatus, setServerStatus] = useState('Checking...')

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
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <button className="card-btn">Open</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
