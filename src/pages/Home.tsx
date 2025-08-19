import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "../styles/pagecss/home.css";

const Home = () => {
  const [started, setStarted] = useState(false);

  const begin = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (started) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        begin();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [started, begin]);

  return (
    <div
      className={`home-container ${started ? "started" : ""}`}
      onClick={() => {
        if (!started) begin();
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!started && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          begin();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={started ? "Navigation shown" : "Click or press Enter to start"}
    >
      {!started && (
        <section className="hero">
          <h1 className="hero-title">WELCOME</h1>
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
