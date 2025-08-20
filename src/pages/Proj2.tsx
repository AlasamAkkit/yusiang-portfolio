import { Link } from "react-router-dom";
import "../styles/pagecss/proj2.css"; 
import Navbar from "../components/Navbar";

const Proj2 = () => {
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">React Jobs</h1>
      
      <img
        src="/assets/reactjobs.png" 
        alt="React Jobs image"
        className="project-image"
      />

      <p className="project-description">
        react jobs desc
      </p>

      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default Proj2;
