import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, user);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : { success: false, message: "Server error" };
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : { success: false, message: "Server error" };
  }
};
