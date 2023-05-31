import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="nav-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="nxt-wave-logo"
      />
      <p className="nav-heading">Wave</p>
    </div>
    <div className="nav-link-container">
      <Link to="/">
        <p className="nav-links">Home</p>
      </Link>
      <Link to="/about">
        <p className="nav-links link">About</p>
      </Link>
      <Link to="/contact">
        <p className="nav-links">Contact</p>
      </Link>
    </div>
  </nav>
)

export default Header
