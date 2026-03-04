import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="nav-logo">🎓</span>
        <span>CampusApp</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Navbar
