import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import VideoCard from "../../components/VideoCards/VideoCards";
import SummaryModal from "../../components/SummaryModal/SummaryModal";
import { API_BASE_URL } from "../../../config"
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const fetchHistory = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/video/history`, { withCredentials: true });
            setVideos(res.data);
        } catch (err) {
            toast.error("Failed to fetch video history");
        }
    };

    const handleSubmit = async () => {
        if (!url) return toast.error("YouTube URL required");

        try {
            await axios.post(`${API_BASE_URL}/video/submit`, {
                url,
                description,
                tags: tags.split(",").map(t => t.trim())
            }, { withCredentials: true });

            toast.success("Video submitted!");
            setUrl("");
            setDescription("");
            setTags("");
            fetchHistory();
        } catch (err) {
            toast.error(err?.response?.data?.message || "Submission failed");
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <>
            <Navbar />
            <Box p={3}>
                <Typography variant="h5" mb={2}>Submit a YouTube Video</Typography>

                <Box display="flex" flexDirection="column" gap={2} maxWidth={500}>
                    <TextField label="YouTube URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                    <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} multiline />
                    <TextField label="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
                    <Button variant="contained" onClick={handleSubmit}>Submit Video</Button>
                </Box>

                <Typography variant="h6" mt={4}>Your Video History</Typography>
                <Grid container spacing={2} mt={1}>
                    {videos.map((video) => (
                        <Grid item xs={12} sm={6} md={4} key={video._id}>
                            <VideoCard video={video} onSummarize={() => setSelectedVideo(video)} />
                        </Grid>
                    ))}
                </Grid>

                {selectedVideo && (
                    <SummaryModal
                        video={selectedVideo}
                        open={Boolean(selectedVideo)}
                        onClose={() => setSelectedVideo(null)}
                    />
                )}
            </Box>
        </>
    );
};

export default Dashboard;
