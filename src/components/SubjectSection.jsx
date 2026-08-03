import "./SubjectSection.css";

function SubjectSection() {

  const subjects = [
    {
      icon:"📘",
      name:"Bangla",
      desc:"Grammar • Literature"
    },
    {
      icon:"🌍",
      name:"English",
      desc:"Grammar • Spoken"
    },
    {
      icon:"🧮",
      name:"Mathematics",
      desc:"Algebra • Geometry"
    },
    {
      icon:"⚛️",
      name:"Physics",
      desc:"Motion • Electricity"
    },
    {
      icon:"🧪",
      name:"Chemistry",
      desc:"Organic • Inorganic"
    },
    {
      icon:"🧬",
      name:"Biology",
      desc:"Botany • Zoology"
    },
    {
      icon:"💻",
      name:"ICT",
      desc:"Programming • Technology"
    },
    {
      icon:"🌏",
      name:"BGS",
      desc:"History • Geography"
    }
  ];


  return (

    <section className="subject-section">

      <h2>
        📖 Popular Subjects
      </h2>


      <div className="subject-grid">


        {
          subjects.map((subject)=>(

            <div 
              className="subject-card"
              key={subject.name}
            >

              <div className="subject-icon">
                {subject.icon}
              </div>


              <h3>
                {subject.name}
              </h3>


              <p>
                {subject.desc}
              </p>


              <button>
                Explore →
              </button>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default SubjectSection;