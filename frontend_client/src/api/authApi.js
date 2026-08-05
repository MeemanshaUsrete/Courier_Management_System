import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const forgotPassword = async (email) => {
  try {
    const response = await API.post("/forgot-password", { email });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to verify email" };
  }
};

export const resetPassword = async (email, newPassword) => {
  try {
    const response = await API.post("/reset-password", { email, newPassword });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to reset password" };
  }
};
