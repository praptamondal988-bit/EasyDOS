import "./VideoCard.css";

function VideoCard({ video, onClick }) {
  return (
    <div className="video-card" onClick={onClick}>
      <div className="thumbnail">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
        />
      </div>

      <div className="video-info">
        <h3>{video.title}</h3>

        <p>👨‍🏫 {video.teacher}</p>

        <span>⏱ {video.duration}</span>
      </div>
    </div>
  );
}

export default VideoCard;