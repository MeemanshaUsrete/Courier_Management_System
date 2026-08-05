import axios from "axios";

// Create Axios instance
export const API = axios.create({
  baseURL: "http://localhost:8080/api/users",
  headers: {
    "Content-Type": "application/json",
  },
});

// Signup API
export const signupUser = async (userData) => {
  try {
    const response = await API.post("/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed" };
  }
};

