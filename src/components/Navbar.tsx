import { Link } from 'react-router-dom';
import "../styles/componentcss/navbar.css";
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-link"><HomeIcon fontSize="large"/></Link>
      </div>
      <div className="navbar-links">
        <Link to="/aboutme" className="nav-link">About Me</Link>
        <Link to="/contactme" className="nav-link">Contact</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar