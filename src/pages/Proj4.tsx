import "../styles/pagecss/proj4.css"; 
import Navbar from "../components/Navbar";
import { useMediaQuery, useTheme, Button, ImageList, ImageListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Proj4 = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/projects");
  }
  const itemData = [
    {
      img: "/assets/Tasktracker1.png",
      title: "Task Tracker add task",
    },
    {
      img: "/assets/Tasktracker2.png",
      title: "Task Tracker tasks added",
    },
    {
      img: "/assets/Tasktracker3.png",
      title: "Task Tracker completed tasks",
    },
    {
      img: "/assets/Tasktracker4.png",
      title: "Task Tracker delete task",
    }
  ]

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm')); 
  const cols = smUp ? 2 : 1;

  return (
    <div className="project-detail">
      <Navbar />
      <h1 className="project-title">Task Tracker (React To-Do List)</h1>

      <p className="project-description">
        Task Tracker is a simple React application that allows users to manage 
        and track their daily tasks efficiently. Users can add, remove, and 
        mark tasks as complete, providing a clean and intuitive experience.
      </p>

      <ImageList sx={{ width: 800, maxWidth: '100%', mx: 'auto' }} cols={cols} rowHeight={150} gap={12}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ overflow: 'hidden' }}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </ImageListItem>
      ))}
    </ImageList>

      <p className="project-description">
        Check out the repositories for the project here:
        <p><a href="https://github.com/AlasamAkkit/task-tracker-client">frontend</a></p>
        <p><a href="https://github.com/AlasamAkkit/task-tracker-backend">backend</a></p>
      </p>

      <Button variant="contained" color="primary" className="back-button" onClick={handleBackClick}>
        ← Back to Projects
      </Button>
    </div>
  );
};

export default Proj4;
