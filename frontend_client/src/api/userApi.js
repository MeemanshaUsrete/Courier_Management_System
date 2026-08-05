import axios from "axios";
import { getToken } from "../utils/auth";

const API = axios.create({
  baseURL: "http://localhost:8080/api/users",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getUserProfile = async () => {
  try {
    const response = await API.get("/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch user profile" };
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const response = await API.put("/profile", profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update profile" };
  }
};
