import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🎓 Bangladesh's Smart Learning Platform
        </span>

        <h1>
          Learn Smarter with
          <span> EasyDOS</span>
        </h1>

        <p>
          Video lessons, notes, quizzes and study
          materials for Class 9 and Class 10 students.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/class/9")}
          >
            Start Learning
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/class/10")}
          >
            Explore
          </button>

        </div>

        <div className="hero-features">

          <div className="feature-card">
            📚
            <span>Study Notes</span>
          </div>

          <div className="feature-card">
            🎥
            <span>Video Classes</span>
          </div>

          <div className="feature-card">
            📝
            <span>Quiz & MCQ</span>
          </div>

          <div className="feature-card">
            🏆
            <span>SSC Prep</span>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image-card">

          <div className="big-icon">
            🎓
          </div>

          <h3>Class 9 & 10</h3>

          <p>
            Learn with confidence.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;