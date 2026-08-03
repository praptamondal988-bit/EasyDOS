import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import "./SubjectPage.css";

function SubjectPage() {
  const { classId, subjectName } = useParams();
  const navigate = useNavigate();

  const chapters = [
    {
      id: 1,
      title: "Chapter 1",
      subtitle: "Introduction",
    },

    {
      id: 2,
      title: "Chapter 2",
      subtitle: "Basic Concepts",
    },

    {
      id: 3,
      title: "Chapter 3",
      subtitle: "Advanced Topics",
    },

    {
      id: 4,
      title: "Chapter 4",
      subtitle: "Practice & Problems",
    },

    {
      id: 5,
      title: "Chapter 5",
      subtitle: "Revision",
    },
  ];

  return (
    <div className="subject-page">

      <Navbar />

      {/* HERO */}

      <section className="subject-hero">

        <span className="subject-badge">
          📚 Class {classId}
        </span>

        <h1>{subjectName}</h1>

        <p>
          Select a chapter and start learning.
        </p>

      </section>

      {/* CHAPTERS */}

      <section className="chapter-section">

        <h2>All Chapters</h2>

        <div className="chapter-grid">

          {chapters.map((chapter) => (

            <div
              key={chapter.id}
              className="chapter-card"
              onClick={() =>
                navigate(
                  `/class/${classId}/subject/${subjectName}/chapter/${chapter.id}`
                )
              }
            >

              <div className="chapter-number">
                {chapter.id}
              </div>

              <h3>{chapter.title}</h3>

              <p>{chapter.subtitle}</p>

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

export default SubjectPage;