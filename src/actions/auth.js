import axios from "../services/axios";

export const login = async (payload) => {
  try {
    const response = await axios.post("/auth/login", payload);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register = async (payload) => {
  try {
    const response = await axios.post("/auth/signup", payload);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCurrentUserDetails = async () => {
  try {
    const response = await axios.get("/user/current");

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
