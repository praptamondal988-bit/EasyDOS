import { useNavigate } from "react-router-dom";
import "./ClassSection.css";

function ClassSection() {
  const navigate = useNavigate();

  const classes = [
    {
      id: "class-6",
      number: "06",
      title: "Class 6",
      description: "Build your strong learning foundation.",
    },
    {
      id: "class-7",
      number: "07",
      title: "Class 7",
      description: "Explore new concepts and grow your knowledge.",
    },
    {
      id: "class-8",
      number: "08",
      title: "Class 8",
      description: "Prepare yourself for the next academic level.",
    },
    {
      id: "class-9",
      number: "09",
      title: "Class 9",
      description: "Master Science, Mathematics and more.",
      featured: true,
      badge: "FEATURED",
    },
    {
      id: "class-10",
      number: "10",
      title: "Class 10",
      description: "Prepare for your SSC journey with EasyDOS.",
      featured: true,
      badge: "SSC JOURNEY",
    },
  ];

  return (
    <section className="class-section">

      {/* Section Header */}

      <div className="class-section-header">

        <div>
          <span className="class-section-label">
            LEARNING PATH
          </span>

          <h2>
            Choose Your Class
          </h2>

          <p>
            Select your class and start your learning journey.
          </p>
        </div>

      </div>


      {/* Class Grid */}

      <div className="class-selection-grid">

        {classes.map((item) => (

          <div
            key={item.id}
            className={`class-select-card ${
              item.featured ? "featured-class" : ""
            }`}
            onClick={() =>
              navigate(`/class/${item.id}`)
            }
          >

            {/* Badge */}

            {item.badge && (
              <span className="class-card-badge">
                {item.badge}
              </span>
            )}


            {/* Number */}

            <div className="class-number">
              {item.number}
            </div>


            {/* Content */}

            <div className="class-card-content">

              <span className="class-small-label">
                ACADEMIC YEAR
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>


            {/* Bottom */}

            <div className="class-card-footer">

              <span>
                Explore Course
              </span>

              <span className="class-arrow">
                →
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ClassSection;