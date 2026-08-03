function ClassCard({ title }) {
  return (
    <div className="class-card">
      <div className="class-top">
        <span className="class-icon">📚</span>
        <h3>{title}</h3>
      </div>

      <p>All Subjects Available</p>

      <div className="class-info">
        <span>🎥 120+ Video Lessons</span>
        <span>📄 60+ PDF Notes</span>
        <span>📝 Quiz & Model Test</span>
      </div>

      <button className="class-btn">
        Start Learning →
      </button>
    </div>
  );
}

export default ClassCard;