const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Campus App API is running' })
})

// Announcements (placeholder data for now)
app.get('/api/announcements', (req, res) => {
  res.json([
    { id: 1, title: 'Library hours extended', date: '2026-03-03', body: 'The library will now be open until 11pm on weekdays.' },
    { id: 2, title: 'Campus Wi-Fi upgrade', date: '2026-03-02', body: 'Wi-Fi upgrades scheduled this weekend. Expect brief outages.' },
    { id: 3, title: 'Spring semester exams', date: '2026-03-01', body: 'Exam schedule is now available on the student portal.' },
  ])
})

// Events (placeholder data for now)
app.get('/api/events', (req, res) => {
  res.json([
    { id: 1, title: 'Freshers Orientation', date: '2026-03-10', location: 'Main Hall' },
    { id: 2, title: 'Tech Career Fair',     date: '2026-03-15', location: 'Sports Complex' },
    { id: 3, title: 'Coding Hackathon',     date: '2026-03-20', location: 'Computer Lab B' },
  ])
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
