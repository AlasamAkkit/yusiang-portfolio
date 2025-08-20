import { useNavigate } from "react-router-dom";
import "../styles/pagecss/proj2.css"; 
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";

const Proj2 = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/projects");
  }
  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">React Jobs</h1>

      <p className="project-description">
        React Jobs is a job listing application built with React. 
        It allows job finders to browse and apply for jobs,
        as well as for employers to post job listings.
        this project showcases the use of React fro building dynamic user interfaces,
        and demonstrates the ability to handle state management and API integration.
      </p>

      {/* image gallery */}

      <p className="project-description">Check out the repository for the source code <a href="https://github.com/AlasamAkkit/reactjobs">here</a></p>

      <Button variant="contained" color="primary" className="back-button" onClick={handleBackClick}>
        ← Back to Projects
      </Button>
    </div>
  );
};

export default Proj2;
