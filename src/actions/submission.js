import axios from "../services/axios";

export const getSubmission = async ({ questionId }) => {
  try {
    const response = await axios.get(`/submission/${questionId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
