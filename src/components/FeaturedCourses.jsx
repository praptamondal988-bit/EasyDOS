import "./FeaturedCourses.css";

function FeaturedCourses() {

  const courses = [
    {
      icon:"⚛️",
      title:"Physics Complete Course",
      teacher:"Rahim Sir",
      lessons:"120+ Lessons"
    },
    {
      icon:"🧪",
      title:"Chemistry Masterclass",
      teacher:"Karim Sir",
      lessons:"100+ Lessons"
    },
    {
      icon:"🧬",
      title:"Biology Crash Course",
      teacher:"Anika Ma'am",
      lessons:"90+ Lessons"
    },
    {
      icon:"💻",
      title:"ICT Premium Batch",
      teacher:"Sabbir Sir",
      lessons:"80+ Lessons"
    }
  ];


  return (

    <section className="featured-section">

      <h2>
        🎯 Featured Courses
      </h2>


      <div className="featured-grid">

        {
          courses.map((course)=>(

            <div 
              className="featured-card"
              key={course.title}
            >

              <div className="featured-icon">
                {course.icon}
              </div>


              <h3>
                {course.title}
              </h3>


              <p>
                👨‍🏫 {course.teacher}
              </p>


              <span>
                📚 {course.lessons}
              </span>


              <button>
                Start Course →
              </button>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default FeaturedCourses;