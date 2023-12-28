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
    console.log(response, "res");
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

// Delete data from database

export const deleteData = async (endpoint, id) => {
  try {
    const response = await userService.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// fetch single id data

export const fetchUserData = async (id) => {
  try {
    const response = await userService.get(`${baseURL}/selectedOptions/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
// Edit data from database
export const updateUserData = async (id, updatedData) => {
  try {
    const response = await axios.put(
      `${baseURL}/selectedOptions/${id}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
