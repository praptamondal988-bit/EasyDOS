import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner">

      <div className="overlay">

        <div className="hero-content">

          <span className="badge">
            🚀 SSC Science 2027 Preparation
          </span>

          <h1>
            Bangladesh's Smart
            <br />
            Learning Platform
          </h1>

          <p>
            HD Video Classes • PDF Notes • CQ • MCQ • Model Tests • Smart Quiz
          </p>

          <div className="hero-buttons">

            <button className="start-btn">
              ▶ Start Learning
            </button>

            <button className="notes-btn">
              📄 Free Notes
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;