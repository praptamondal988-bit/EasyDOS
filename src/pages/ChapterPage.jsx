import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import "./ChapterPage.css";

function ChapterPage() {
  const { classId, subjectName, chapterId } = useParams();

  const navigate = useNavigate();

  return (
    <div className="chapter-page">

      <Navbar />

      {/* HERO */}

      <section className="chapter-hero">

        <span className="chapter-badge">
          📚 Class {classId} • {subjectName}
        </span>

        <h1>
          Chapter {chapterId}
        </h1>

        <p>
          Watch videos, read PDFs and practise quizzes.
        </p>

      </section>

      {/* CONTENT */}

      <section className="chapter-content">

        {/* VIDEO */}

        <div className="chapter-card">

          <div className="chapter-icon">
            🎥
          </div>

          <h2>Video Lesson</h2>

          <p>
            Watch chapter videos here.
          </p>

          <button
            onClick={() =>
              navigate(
                `/class/${classId}/subject/${subjectName}/chapter/${chapterId}/lesson/1`
              )
            }
          >
            Watch Now
          </button>

        </div>

        {/* PDF */}

        <div className="chapter-card">

          <div className="chapter-icon">
            📄
          </div>

          <h2>PDF Notes</h2>

          <p>
            Download notes and PDFs.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                "_blank"
              )
            }
          >
            Download
          </button>

        </div>

        {/* QUIZ */}

        <div className="chapter-card">

          <div className="chapter-icon">
            📝
          </div>

          <h2>Quiz</h2>

          <p>
            Test your knowledge.
          </p>

          <button
            onClick={() =>
              alert("Quiz feature coming soon!")
            }
          >
            Start Quiz
          </button>

        </div>

      </section>

      {/* BACK */}

      <div className="back-section">

        <button
          className="back-btn"
          onClick={() =>
            navigate(
              `/class/${classId}/subject/${subjectName}`
            )
          }
        >
          ← Back
        </button>

      </div>

    </div>
  );
}

export default ChapterPage;