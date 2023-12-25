import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const userService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Post data to the database

export const PostSelectedData = async (data) => {
  try {
    const response = await userService.post("/selectedOptions", data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to post selected options");
  }
};

// get data from database

export const fetchData = async (endpoint) => {
  try {
    const response = await userService.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
