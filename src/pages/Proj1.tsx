import { Link } from "react-router-dom";
import "../styles/pagecss/proj1.css"; 
import Navbar from "../components/Navbar";

const Proj1 = () => {
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">EduCareer</h1>
      
      <img
        src="/assets/educareer.png" 
        alt="EduCareer image"
        className="project-image"
      />

      <p className="project-description">
        educareer desc
      </p>

      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default Proj1;
