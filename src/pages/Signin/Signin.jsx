import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {API_BASE_URL} from"../../../config"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/auth/login`, formData, { withCredentials: true });
      toast.success("Login successful!");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Toaster />
      <Box maxWidth={400} mx="auto" mt={5} p={3} boxShadow="lg">
        <Typography variant="h5" textAlign="center">Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField name="email" label="Email" type="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} />
          <TextField name="password" label="Password" type="password" fullWidth margin="normal" value={formData.password} onChange={handleChange} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Login</Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
