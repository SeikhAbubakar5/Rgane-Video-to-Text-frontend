import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const VideoCard = ({ video, onSummarize }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{video.title}</Typography>
        <Typography variant="body2">{video.description}</Typography>
        <Typography variant="caption">Tags: {video.tags?.join(", ")}</Typography>
        <Button sx={{ mt: 1 }} size="small" variant="outlined" onClick={onSummarize}>
          Summarize
        </Button>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
