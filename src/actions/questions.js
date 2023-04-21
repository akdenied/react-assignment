import axios from "../services/axios";

export const getQuestionList = async () => {
  try {
    const response = await axios.get("/question");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
