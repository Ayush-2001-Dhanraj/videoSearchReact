import React from "react";
import { Card, CardContent, Box, CardMedia, Typography } from "@mui/material";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <Card
      sx={{ maxWidth: 350, display: "flex", margin: "10px 0", boxShadow: 3 }}
      style={{ cursor: "pointer" }}
      onClick={() => handleVideoSelect(video)}
    >
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <CardContent>
          <Typography variant="caption" display="block" gutterBottom>
            {video.snippet.title}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          style={{ maxWidth: 150 }}
        />
      </Box>
    </Card>
  );
};

export default VideoItem;
