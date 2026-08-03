import "./LearningPage.css";
import { useNavigate, useParams } from "react-router-dom";

function LearningPage() {

  const { className, subjectName } = useParams();
  const navigate = useNavigate();

  const items = [
    {
      title: "Video Classes",
      icon: "🎥",
      color: "#2563eb",
      path: `/videos/${className}/${subjectName}`,
    },
    {
      title: "PDF Notes",
      icon: "📄",
      color: "#10b981",
      path: "#",
    },
    {
      title: "CQ Practice",
      icon: "📝",
      color: "#f59e0b",
      path: "#",
    },
    {
      title: "MCQ Quiz",
      icon: "❓",
      color: "#8b5cf6",
      path: "#",
    },
    {
      title: "Model Test",
      icon: "📚",
      color: "#ef4444",
      path: "#",
    },
    {
      title: "Suggestions",
      icon: "⭐",
      color: "#06b6d4",
      path: "#",
    },
  ];

  return (
    <section className="learning-page">

      <h1>{subjectName.replace(/-/g, " ")}</h1>

      <p>Choose what you want to study</p>

      <div className="learning-grid">

        {items.map((item) => (

          <div
            key={item.title}
            className="learning-card"
            style={{ borderTop: `4px solid ${item.color}` }}
            onClick={() => item.path !== "#" && navigate(item.path)}
          >

            <div className="learning-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <span>Open →</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default LearningPage;