import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const classes = [
    {
      id: 9,
      title: "Class 9",
      subtitle: "SSC Foundation",
      icon: "📘",
      description: "Start building your SSC foundation."
    },
    {
      id: 10,
      title: "Class 10",
      subtitle: "SSC Final Preparation",
      icon: "📗",
      description: "Complete your SSC preparation."
    }
  ];

  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="navbar-left">

          <div className="logo-box">
            E
          </div>

          <div>

            <h2>EasyDOS</h2>

            <span>
              Learn • Practice • Grow
            </span>

          </div>

        </div>

        <nav>

          <button className="active">
            Home
          </button>

          <button>
            Classes
          </button>

          <button>
            Subjects
          </button>

          <button>
            About
          </button>

        </nav>

        <div className="navbar-right">

          <button className="icon-btn">
            🔍
          </button>

          <button className="login-btn">
            Login
          </button>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-left">

          <span className="hero-badge">

            🚀 Bangladesh's Premium Learning Platform

          </span>

          <h1>

            Learn

            <span>

              Smarter

            </span>

            <br />

            with EasyDOS

          </h1>

          <p>

            Watch videos, read PDFs, solve quizzes
            and prepare for SSC with one modern
            learning platform.

          </p>

          <div className="hero-search">

            <input
              type="text"
              placeholder="Search subject..."
            />

            <button>

              Search

            </button>

          </div>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/class/9")}
            >
              Start Learning →
            </button>

            <button
              className="secondary-btn"
            >
              Explore
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="glass-card">

            <div className="hero-icon">

              🎓

            </div>

            <h3>

              Continue Learning

            </h3>

            <p>

              Physics
              <br />
              Chapter 3

            </p>

            <div className="progress">

              <div
                className="progress-fill"
              ></div>

            </div>

            <span>

              65% Completed

            </span>

          </div>

          <div className="floating-card card1">

            📚

            <span>

              500+ PDFs

            </span>

          </div>

          <div className="floating-card card2">

            🎥

            <span>

              1000+ Videos

            </span>

          </div>

          <div className="floating-card card3">

            📝

            <span>

              Daily Quiz

            </span>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="stat-card">

          <h2>1000+</h2>

          <p>Video Lessons</p>

        </div>

        <div className="stat-card">

          <h2>500+</h2>

          <p>PDF Notes</p>

        </div>

        <div className="stat-card">

          <h2>200+</h2>

          <p>Quizzes</p>

        </div>

        <div className="stat-card">

          <h2>24/7</h2>

          <p>Learning</p>

        </div>

      </section>

      {/* ================= CLASS SECTION ================= */}

      <section className="class-section">

        <div className="section-title">

          <h2>

            Choose Your Class

          </h2>

          <p>

            Continue your SSC preparation

          </p>

        </div>

        <div className="class-grid">

          {classes.map((item) => (

            <div
              key={item.id}
              className="class-card"
              onClick={() =>
                navigate(`/class/${item.id}`)
              }
            >

              <div className="class-icon">

                {item.icon}

              </div>

              <h3>

                {item.title}

              </h3>

              <h4>

                {item.subtitle}

              </h4>

              <p>

                {item.description}

              </p>

              <button>

                Explore →

              </button>

            </div>

          ))}

        </div>

      </section>      {/* ================= POPULAR SUBJECTS ================= */}

      <section className="subjects-section">

        <div className="section-title">

          <h2>🔥 Popular Subjects</h2>

          <p>Most watched subjects by students</p>

        </div>

        <div className="subjects-grid">

          <div className="subject-card math">

            <div className="subject-icon">
              📐
            </div>

            <h3>Higher Math</h3>

            <p>
              Master every difficult chapter easily.
            </p>

            <button>Open →</button>

          </div>

          <div className="subject-card physics">

            <div className="subject-icon">
              ⚛️
            </div>

            <h3>Physics</h3>

            <p>
              Video lessons & practice quizzes.
            </p>

            <button>Open →</button>

          </div>

          <div className="subject-card chemistry">

            <div className="subject-icon">
              🧪
            </div>

            <h3>Chemistry</h3>

            <p>
              Learn reactions with animations.
            </p>

            <button>Open →</button>

          </div>

          <div className="subject-card biology">

            <div className="subject-icon">
              🧬
            </div>

            <h3>Biology</h3>

            <p>
              Easy diagrams & smart notes.
            </p>

            <button>Open →</button>

          </div>

        </div>

      </section>

      {/* ================= CONTINUE WATCHING ================= */}

      <section className="continue-section">

        <div className="section-title">

          <h2>Continue Learning</h2>

          <p>Resume your last lesson</p>

        </div>

        <div className="continue-card">

          <div className="continue-left">

            <div className="continue-icon">
              🎥
            </div>

            <div>

              <h3>Physics</h3>

              <p>Chapter 3 • Motion</p>

            </div>

          </div>

          <button>

            ▶ Continue

          </button>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="features-section">

        <div className="section-title">

          <h2>Why EasyDOS?</h2>

          <p>Your complete learning platform</p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">

              🎥

            </div>

            <h3>

              HD Video Lessons

            </h3>

            <p>

              Learn from premium quality
              educational videos.

            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">

              📄

            </div>

            <h3>

              PDF Notes

            </h3>

            <p>

              Download chapter wise
              premium notes.

            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">

              📝

            </div>

            <h3>

              Practice Quiz

            </h3>

            <p>

              Test yourself after
              every chapter.

            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">

        <h2>

          Ready to Start Learning?

        </h2>

        <p>

          Join thousands of students learning with EasyDOS.

        </p>

        <button
          onClick={() => navigate("/class/9")}
        >

          Get Started →

        </button>

      </section>      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <div className="logo-box">
              E
            </div>

            <div>

              <h2>EasyDOS</h2>

              <p>
                Building the Future of Learning.
              </p>

            </div>

          </div>

          <div className="footer-links">

            <div>

              <h3>Quick Links</h3>

              <a href="/">Home</a>

              <a href="/class/9">Class 9</a>

              <a href="/class/10">Class 10</a>

            </div>

            <div>

              <h3>Resources</h3>

              <a href="/">PDF Notes</a>

              <a href="/">Videos</a>

              <a href="/">Quiz</a>

            </div>

            <div>

              <h3>Contact</h3>

              <a href="mailto:easydos.edu@gmail.com">

                Email

              </a>

              <a href="#">

                Facebook

              </a>

              <a href="#">

                GitHub

              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 EasyDOS. All Rights Reserved.

          </p>

          <p>

            Developed with ❤️ by

            <strong>

              {" "}Prapto Mondal

            </strong>

          </p>

        </div>

      </footer>

    </div>

  );

}

export default Home;