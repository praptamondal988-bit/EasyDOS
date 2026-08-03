import "./TrendingCourses.css";

function TrendingCourses() {
  const courses = [
    {
      title: "Physics Complete Course",
      teacher: "Rahim Sir",
      students: "12K+ Students",
      icon: "⚛️",
    },
    {
      title: "Chemistry Masterclass",
      teacher: "Karim Sir",
      students: "10K+ Students",
      icon: "🧪",
    },
    {
      title: "Biology Crash Course",
      teacher: "Anika Ma'am",
      students: "15K+ Students",
      icon: "🌿",
    },
    {
      title: "ICT Premium Batch",
      teacher: "Sabbir Sir",
      students: "8K+ Students",
      icon: "💻",
    },
  ];

  return (
    <section className="trending">
      <h2>🔥 Trending Courses</h2>

      <div className="trending-grid">
        {courses.map((course) => (
          <div className="trending-card" key={course.title}>
            <div className="trend-icon">{course.icon}</div>

            <h3>{course.title}</h3>

            <p>👨‍🏫 {course.teacher}</p>

            <small>{course.students}</small>

            <button>Watch Now ▶</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCourses;