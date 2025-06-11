import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {API_BASE_URL} from"../../../config"

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/auth/signup`, formData, { withCredentials: true });
      toast.success("Signup successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <Toaster />
      <Box maxWidth={400} mx="auto" mt={5} p={3} boxShadow="lg">
        <Typography variant="h5" textAlign="center">Signup</Typography>
        <form onSubmit={handleSignup}>
          <TextField name="email" label="Email" type="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} />
          <TextField name="password" label="Password" type="password" fullWidth margin="normal" value={formData.password} onChange={handleChange} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Signup</Button>
        </form>
        <Button fullWidth sx={{ mt: 1 }} onClick={() => navigate("/login")}>Already have an account? Login</Button>
      </Box>
    </>
  );
};

export default Signup;
