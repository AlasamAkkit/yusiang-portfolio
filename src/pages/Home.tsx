import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pagecss/home.css";

const Home = () => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setStarted(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [started]);

  return (
    <div
      className={`home-container ${started ? "started" : ""}`}
      onClick={() => {
        if (!started) {
          setStarted(true);
        };
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!started && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setStarted(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={started ? "Navigation shown" : "Click or press Enter to start"}
    >
      {!started && (
        <section className="hero">
          <h1 className="hero-title">
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </h1>
          <p className="hero-instruction">Click anywhere or press Enter/Space to begin</p>
        </section>
      )}

      {started && (
        <nav className="reveal-nav" aria-label="Primary">
          <ul className="nav-list">
            <li><Link to="/aboutme">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contactme">Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Home;
