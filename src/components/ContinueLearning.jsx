import "./ContinueLearning.css";
import { getWatchHistory } from "../utils/watchHistory";
import { Link } from "react-router-dom";

function ContinueLearning() {

  const history = getWatchHistory();

  if (history.length === 0) {
    return null;
  }

  return (
    <section className="continue-section">

      <h2>▶ Continue Learning</h2>

      <div className="continue-grid">

        {history.map((video) => (

          <div
            className="continue-card"
            key={video.youtubeId}
          >

            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              className="continue-thumb"
            />

            <h3>{video.title}</h3>

            <p>{video.teacher}</p>

            <Link to={`/watch/${video.youtubeId}`}>
              <button>▶ Continue</button>
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ContinueLearning;