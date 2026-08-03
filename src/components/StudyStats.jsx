import "./StudyStats.css";

function StudyStats() {

  const stats = [
    {
      icon: "👨‍🎓",
      number: "50K+",
      title: "Students"
    },
    {
      icon: "🎥",
      number: "1200+",
      title: "Video Classes"
    },
    {
      icon: "📄",
      number: "600+",
      title: "PDF Notes"
    },
    {
      icon: "🏆",
      number: "98%",
      title: "Success Rate"
    }
  ];


  return (

    <section className="stats-section">

      <h2>
        📊 EasyDOS Statistics
      </h2>


      <div className="stats-grid">

        {
          stats.map((item)=>(

            <div 
              className="stats-card"
              key={item.title}
            >

              <div className="stats-icon">
                {item.icon}
              </div>


              <h3>
                {item.number}
              </h3>


              <p>
                {item.title}
              </p>


            </div>

          ))
        }

      </div>


    </section>

  );

}


export default StudyStats;