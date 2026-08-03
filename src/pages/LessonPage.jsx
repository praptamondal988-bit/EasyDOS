import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import "./LessonPage.css";

function LessonPage() {
  const { classId, subjectName, chapterId, lessonId } = useParams();

  const navigate = useNavigate();

  // Demo links (পরে Google Sheet থেকে আসবে)

  const videoUrl =
    "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const pdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <div className="lesson-page">

      <Navbar />

      {/* HERO */}

      <section className="lesson-hero">

        <span className="lesson-badge">
          📚 Class {classId} • {subjectName}
        </span>

        <h1>
          Chapter {chapterId}
        </h1>

        <p>
          Lesson {lessonId}
        </p>

      </section>

      {/* VIDEO */}

      <section className="video-section">

        <div className="video-box">

          <h2>🎥 Video Lesson</h2>

          <iframe
            src={videoUrl}
            title="Lesson Video"
            allowFullScreen
          ></iframe>

        </div>

      </section>

      {/* PDF */}

      <section className="pdf-section">

        <div className="pdf-box">

          <h2>📄 PDF Notes</h2>

          <iframe
            src={pdfUrl}
            title="PDF Notes"
          ></iframe>

        </div>

      </section>

      {/* QUIZ */}

      <section className="quiz-section">

        <div className="quiz-box">

          <h2>📝 Quiz</h2>

          <p>
            Quiz feature will be added later.
          </p>

          <button
            onClick={() =>
              alert("Quiz coming soon!")
            }
          >
            Start Quiz
          </button>

        </div>

      </section>

      {/* BOOKMARK */}

      <section className="bookmark-section">

        <div className="bookmark-box">

          <h2>⭐ Bookmark</h2>

          <button
            onClick={() =>
              alert("Saved!")
            }
          >
            Save Lesson
          </button>

        </div>

      </section>

      {/* BACK */}

      <div className="lesson-back">

        <button
          onClick={() =>
            navigate(
              `/class/${classId}/subject/${subjectName}/chapter/${chapterId}`
            )
          }
        >
          ← Back
        </button>

      </div>

    </div>
  );
}

export default LessonPage;