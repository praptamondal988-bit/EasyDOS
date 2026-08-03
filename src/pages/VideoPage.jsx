import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVideos } from "../services/googleSheet";
import "./VideoPage.css";

function VideoPage() {

  const { className, subjectName, chapterId } = useParams();
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadVideos() {

      const data = await getVideos();

      const filtered = data.filter(
        (video) =>
          video.className === className &&
          video.subject === subjectName &&
          video.chapter === chapterId
      );

      setVideos(filtered);
      setLoading(false);
    }

    loadVideos();

  }, [className, subjectName, chapterId]);

  if (loading) {
    return (
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "80px"
        }}
      >
        Loading...
      </h2>
    );
  }

  return (
    <div className="video-page">

      <h1>
        {subjectName.toUpperCase()}
      </h1>

      <div className="video-grid">

        {videos.map((video, index) => (

          <div
            key={index}
            className="video-card"
            onClick={() =>
              navigate(`/watch/${video.youtubeId}`)
            }
          >

            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
            />

            <div className="video-info">

              <h3>{video.title}</h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default VideoPage;