import { useEffect, useState } from "react";
import { getWatchHistory } from "../utils/watchHistory";

function ContinueWatching() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    setVideos(getWatchHistory());

  }, []);

  if (videos.length === 0) {

    return null;

  }

  return (

    <section
      style={{
        width:"90%",
        maxWidth:"1200px",
        margin:"50px auto",
        color:"white"
      }}
    >

      <h2>
        ▶ Continue Watching
      </h2>

      <div
        style={{
          display:"grid",
          gap:"20px",
          marginTop:"25px"
        }}
      >

        {videos.map((video)=>(

          <div

            key={video.youtubeId}

            style={{

              background:"#1f2937",

              padding:"20px",

              borderRadius:"15px"

            }}

          >

            <h3>
              {video.title}
            </h3>

            <p>
              👨‍🏫 {video.teacher}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default ContinueWatching;