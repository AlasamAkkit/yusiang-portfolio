import "../styles/pagecss/home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="hero-title">Hi, I'm Yu Siang</h1>
        <p className="hero-subtitle1">
          I'm a computer science student who is a passionate developer building modern and interactive web experiences.
        </p>
        <p className="hero-subtitle2">
          I enjoy learning new technologies and building projects that solve real-world problems.
        </p>
        <p className="hero-subtitle3">
          Check out my projects by navigating to the Projects page on the navbar above or by clicking{' '}
          <Link to="/projects" className="link-here">here</Link>.
        </p>
      </section>
    </div>
  );
}

export default Home