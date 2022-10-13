import React from "react";

const VideoPlayer = ({ videoId }) => {
  return (
    <>
      <h1>VideoPlayer</h1>
      <iframe
        width="320"
        height="570"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </>
  )
}

export default VideoPlayer;
