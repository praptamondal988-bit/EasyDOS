import "./Achievements.css";

function Achievements() {

  const achievements = [
    {
      icon:"🔥",
      number:"30 Days",
      title:"Study Streak"
    },
    {
      icon:"🏅",
      number:"25+",
      title:"Badges Earned"
    },
    {
      icon:"📜",
      number:"10+",
      title:"Certificates"
    },
    {
      icon:"🏆",
      number:"Top 5%",
      title:"Leaderboard"
    }
  ];


  return (

    <section className="achievement-section">

      <h2>
        🏆 Your Achievements
      </h2>


      <div className="achievement-grid">

        {
          achievements.map((item)=>(

            <div
              className="achievement-card"
              key={item.title}
            >

              <div className="achievement-icon">
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


export default Achievements;