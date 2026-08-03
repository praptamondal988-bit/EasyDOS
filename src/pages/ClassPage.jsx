import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import "./ClassPage.css";

function ClassPage() {
  const { classId } = useParams();
  const navigate = useNavigate();

  const subjects = [
    {
      name: "Higher Math",
      icon: "🧮",
      color: "#3b82f6",
    },

    {
      name: "General Math",
      icon: "📐",
      color: "#8b5cf6",
    },

    {
      name: "Physics",
      icon: "⚛️",
      color: "#06b6d4",
    },

    {
      name: "Chemistry",
      icon: "🧪",
      color: "#10b981",
    },

    {
      name: "Biology",
      icon: "🧬",
      color: "#ef4444",
    },

    {
      name: "ICT",
      icon: "💻",
      color: "#f59e0b",
    },
  ];

  return (
    <div className="class-page">

      <Navbar />

      {/* HERO */}

      <section className="class-hero">

        <span className="class-badge">
          📚 SSC Program
        </span>

        <h1>
          Class {classId}
        </h1>

        <p>
          Choose your subject and start learning.
        </p>

      </section>

      {/* SUBJECTS */}

      <section className="subject-section">

        <h2>Subjects</h2>

        <div className="subject-grid">

          {subjects.map((subject, index) => (

            <div
              key={index}
              className="subject-card"
              onClick={() =>
                navigate(
                  `/class/${classId}/subject/${subject.name}`
                )
              }
            >

              <div
                className="subject-icon"
                style={{
                  background: subject.color,
                }}
              >
                {subject.icon}
              </div>

              <h3>{subject.name}</h3>

              <p>
                Explore chapters and lessons
              </p>

              <button>
                Open →
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default ClassPage;