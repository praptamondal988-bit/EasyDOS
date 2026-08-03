import "./PlatformStats.css";

function PlatformStats() {

  const stats = [
    {
      number: "1200+",
      title: "Video Lessons"
    },
    {
      number: "850+",
      title: "PDF Notes"
    },
    {
      number: "50K+",
      title: "Students"
    },
    {
      number: "4.9★",
      title: "Average Rating"
    }
  ];

  return (

    <section className="platform-stats">

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default PlatformStats;