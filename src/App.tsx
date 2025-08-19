import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Proj1 from './pages/Proj1';
import Proj2 from './pages/Proj2';
import Proj3 from './pages/Proj3';
import Proj4 from './pages/Proj4';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/proj1" element={<Proj1 />} />
        <Route path="/proj2" element={<Proj2 />} />
        <Route path="/proj3" element={<Proj3 />} />
        <Route path="/proj4" element={<Proj4 />} />
      </Routes>
    </Router>
  );
}

export default App
