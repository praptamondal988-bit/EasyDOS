import "./TopTeachers.css";

function TopTeachers() {

  const teachers = [
    {
      icon:"👨‍🏫",
      name:"Rahim Sir",
      subject:"Physics Expert",
      students:"25K+ Students",
      rating:"⭐ 4.9"
    },
    {
      icon:"👩‍🏫",
      name:"Karim Sir",
      subject:"Chemistry Expert",
      students:"20K+ Students",
      rating:"⭐ 4.8"
    },
    {
      icon:"👩‍🔬",
      name:"Anika Ma'am",
      subject:"Biology Expert",
      students:"30K+ Students",
      rating:"⭐ 5.0"
    },
    {
      icon:"👨‍💻",
      name:"Sabbir Sir",
      subject:"ICT Expert",
      students:"15K+ Students",
      rating:"⭐ 4.9"
    }
  ];


  return (

    <section className="teachers-section">

      <h2>
        👨‍🏫 Top Teachers
      </h2>


      <div className="teachers-grid">

        {
          teachers.map((teacher)=>(

            <div
              className="teacher-card"
              key={teacher.name}
            >

              <div className="teacher-icon">
                {teacher.icon}
              </div>


              <h3>
                {teacher.name}
              </h3>


              <p>
                {teacher.subject}
              </p>


              <span>
                🎓 {teacher.students}
              </span>


              <strong>
                {teacher.rating}
              </strong>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default TopTeachers;