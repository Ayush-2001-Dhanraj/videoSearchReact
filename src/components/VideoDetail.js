import React from "react";
import { Box, Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Box sx={{ margin: "10px 0", boxShadow: 3 }} p={2}>
      {/* video Player */}
      <Box>
        <iframe
          src={videoSrc}
          style={{
            width: "100%",
            height: "400px",
            maxHeight: "50vh",
            maxWidth: "100vw",
          }}
          title={video.snippet.title}
        />
      </Box>
      <Typography variant="h5" component="div" gutterBottom>
        {video.snippet.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {video.snippet.description}
      </Typography>
    </Box>
  );
};

export default VideoDetail;
