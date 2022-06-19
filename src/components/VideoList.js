import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      handleVideoSelect={handleVideoSelect}
    />
  ));

  return <div>{renderedList}</div>;
};

export default VideoList;
