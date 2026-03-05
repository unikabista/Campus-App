import { useState, useEffect } from 'react'
import axios from 'axios'
import './Announcements.css'

function Announcements() {
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5000/api/announcements')
      .then(res => {
        setAnnouncements(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load announcements. Is the backend running?')
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="state-msg">Loading announcements...</div>
  if (error)   return <div className="state-msg error">{error}</div>

  return (
    <div className="announcements-page">
      <div className="page-header">
        <h1>📢 Announcements</h1>
        <p>{announcements.length} announcements</p>
      </div>

      <div className="announcements-list">
        {announcements.map(item => (
          <div className="announcement-card" key={item.id}>
            <div className="card-meta">
              <span className="badge">New</span>
              <span className="date">{item.date}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements
