import React, { useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Typography
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import {API_BASE_URL} from"../../../config"

const SummaryModal = ({ video, open, onClose }) => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    if (!text) return toast.error("Please enter some text");

    try {
      const res = await axios.post(`${API_BASE_URL}/video/summary`, {
        videoId: video._id,
        text,
      }, { withCredentials: true });

      setSummary(res.data.summary);
    } catch (err) {
      toast.error("Summary failed");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Summarize Video</DialogTitle>
      <DialogContent>
        <TextField
          label="Transcript or Input Text"
          multiline
          fullWidth
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {summary && (
          <>
            <Typography variant="subtitle1" mt={2}>Summary:</Typography>
            <Typography>{summary}</Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" onClick={handleSummarize}>Summarize</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SummaryModal;
