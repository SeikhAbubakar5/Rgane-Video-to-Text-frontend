import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {API_BASE_URL} from"../../../config"

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true });
      toast.success("Logged out!");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return <Button color="inherit" onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
