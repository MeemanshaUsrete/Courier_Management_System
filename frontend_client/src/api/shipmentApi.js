import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/shipments",
  headers: {
    "Content-Type": "application/json",
  },
});

export const trackShipment = async (trackingNumber) => {
  try {
    const response = await API.get(`/track/${encodeURIComponent(trackingNumber.trim())}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch parcel details" };
  }
};
