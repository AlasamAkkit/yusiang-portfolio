import { Link } from "react-router-dom";
import "../styles/pagecss/proj3.css"; 
import Navbar from "../components/Navbar";

const Proj3 = () => {
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">Hospital Management System</h1>
      
      <img
        src="/assets/hms.png" 
        alt="HMS image"
        className="project-image"
      />

      <p className="project-description">
        hms desc
      </p>

      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default Proj3;
