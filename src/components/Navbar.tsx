import { Link } from 'react-router-dom';
import "../styles/componentcss/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/aboutme" className="nav-link">About Me</Link>
        <Link to="/contactme" className="nav-link">Contact</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar