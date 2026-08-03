import { useEffect } from "react";
import { saveWatch } from "../utils/watchHistory";
import { useParams, Link } from "react-router-dom";

function WatchPage() {

  const { youtubeId } = useParams();
useEffect(() => {

  saveWatch({
    youtubeId,
    title: "Physics Video",
    teacher: "EasyDOS"
  });

}, [youtubeId]);

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1300px",
        margin: "40px auto",
        color: "white"
      }}
    >

      <Link
        to="/"
        style={{
          color: "#60a5fa",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600"
        }}
      >
        ← Back to Home
      </Link>

      <h1
        style={{
          marginTop: "25px",
          marginBottom: "15px",
          fontSize: "42px"
        }}
      >
        🎥 EasyDOS Video Player
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "25px"
        }}
      >
        Learn with HD videos from your teachers.
      </p>

      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          background: "#111827",
          boxShadow: "0 20px 50px rgba(0,0,0,.35)"
        }}
      >

       <iframe
       width="100%"
       height="650"
       src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
       title="EasyDOS Video"
       frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerPolicy="strict-origin-when-cross-origin"
       allowFullScreen

       />

      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#1e293b",
          padding: "25px",
          borderRadius: "18px"
        }}
      >

        <h2>📚 About this lesson</h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: 1.8
          }}
        >
          Watch the complete lecture carefully. After finishing,
          solve the exercise from your textbook and then continue
          to the next chapter.
        </p>

      </div>

    </div>
  );
}

export default WatchPage;