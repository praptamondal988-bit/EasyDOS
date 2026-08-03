import { useNavigate } from "react-router-dom";
import "./Classes.css";

function Classes() {
  const navigate = useNavigate();

  const classes = [
    {
      id: 9,
      number: "09",
      title: "Class 9",
      subtitle: "Build Your SSC Foundation",
      description:
        "Strengthen your concepts, master your subjects and build a strong foundation for your SSC journey.",
      icon: "🎓",
      tag: "SSC FOUNDATION",
    },
    {
      id: 10,
      number: "10",
      title: "Class 10",
      subtitle: "Complete Your SSC Journey",
      description:
        "Revise smarter, practise better and prepare yourself confidently for your SSC examination.",
      icon: "🏆",
      tag: "SSC FINAL",
    },
  ];

  return (
    <div className="classes-page">

      {/* ================= HEADER ================= */}

      <header className="classes-header">

        <div
          className="classes-brand"
          onClick={() => navigate("/")}
        >
          <div className="classes-brand-logo">
            E
          </div>

          <div className="classes-brand-text">
            <h2>EasyDOS</h2>
            <span>Learn. Practice. Grow.</span>
          </div>
        </div>


        <nav className="classes-nav">

          <button onClick={() => navigate("/")}>
            Home
          </button>

          <button className="active">
            Classes
          </button>

        </nav>


        <div className="classes-header-actions">

          <button className="classes-icon-btn">
            🔔
          </button>

          <button className="classes-profile-btn">
            👤
          </button>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="classes-hero">

          <div className="classes-hero-content">

            <span className="classes-label">
              YOUR SSC LEARNING SPACE
            </span>

            <h1>
              Choose your
              <span> class.</span>
            </h1>

            <p>
              Welcome to EasyDOS. Select your class and
              explore subjects, chapters, lessons, videos,
              PDFs, quizzes and everything you need for your
              SSC learning journey.
            </p>

          </div>


          <div className="classes-hero-decoration">

            <div className="decoration-circle circle-one">
              🎓
            </div>

            <div className="decoration-circle circle-two">
              ✦
            </div>

            <div className="decoration-circle circle-three">
              📚
            </div>

          </div>

        </section>


        {/* ================= CLASS SELECTION ================= */}

        <section className="class-selection-section">

          <div className="class-section-heading">

            <div>

              <span className="classes-label">
                SSC PROGRAM
              </span>

              <h2>
                Select your class
              </h2>

            </div>

            <p>
              Choose where you want to begin.
            </p>

          </div>


          <div className="premium-class-grid">

            {classes.map((item) => (

              <article
                key={item.id}
                className={`premium-class-card class-${item.id}`}
                onClick={() =>
                  navigate(`/class/${item.id}`)
                }
              >

                {/* CARD TOP */}

                <div className="premium-card-top">

                  <div className="premium-class-icon">
                    {item.icon}
                  </div>

                  <span className="premium-class-tag">
                    {item.tag}
                  </span>

                </div>


                {/* CARD CONTENT */}

                <div className="premium-card-content">

                  <span className="premium-class-number">
                    {item.number}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subtitle}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                </div>


                {/* CARD BOTTOM */}

                <div className="premium-card-bottom">

                  <span>
                    Explore {item.title}
                  </span>

                  <div className="premium-card-arrow">
                    →
                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= SSC JOURNEY ================= */}

        <section className="classes-bottom-cta">

          <div>

            <span className="classes-label">
              YOUR JOURNEY
            </span>

            <h2>
              Learn today.
              Prepare for tomorrow.
            </h2>

            <p>
              From Class 9 foundation to Class 10 SSC
              preparation — EasyDOS is built to support
              your learning journey.
            </p>

          </div>

          <button
            onClick={() => navigate("/")}
          >
            Back to Home
            <span>←</span>
          </button>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="classes-footer">

        <div className="classes-footer-brand">

          <div
            className="classes-brand"
            onClick={() => navigate("/")}
          >

            <div className="classes-brand-logo">
              E
            </div>

            <div className="classes-brand-text">

              <h2>
                EasyDOS
              </h2>

              <span>
                Learn. Practice. Grow.
              </span>

            </div>

          </div>

          <p>
            Building the Future of Learning. 🚀
          </p>

        </div>


        <div className="classes-footer-bottom">

          <span>
            © 2026 EasyDOS. All rights reserved.
          </span>

          <span>
            Developed with ❤️ by Prapto Mondal
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Classes;