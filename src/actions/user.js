import axios from "../services/axios";

export const getUserStatisticsAPI = async () => {
  try {
    const response = await axios.get("/user/statistics");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
