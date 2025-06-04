import { useEffect, useRef } from "react";
import Movie from '../styles/videos/movie1.mp4';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Required for iOS Safari autoplay
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
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
      muted
      autoPlay
      playsInline
      preload="metadata"
    >
      <source src={Movie} type="video/mp4" />
    </video>
  );
};

export default Video;
