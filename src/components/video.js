import { useEffect, useRef } from "react";
import Movie from '../styles/videos/movie1.mp4';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video is playing 🎉
          })
          .catch((error) => {
            // Autoplay failed, handle it if needed
            console.error("Autoplay failed:", error);
          });
      }
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="video"
      loop
      playsInline
      preload="metadata"
      autoPlay
      muted
    >
      <source src={Movie} type="video/mp4" />
    </video>
  );
};

export default Video;
