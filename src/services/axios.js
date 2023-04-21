import Axios from "axios";

export const BASE_URL = "http://localhost:3001/api/v1/";

const axios = Axios.create({
  baseURL: BASE_URL,

  headers: {},
});

axios.interceptors.request.use(
  (config) => {
    if (config.url === "/auth/login" || config.url === "/auth/signup")
      return config;

    const token = localStorage.getItem("token");

    if (token) config.headers.Authorization = token;
    return config;
  },
  (err) => {
    // throw err;

    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    // console.log("🚀 ~ file: axios.js:35 ~ response", response);
    return response;
  },
  (err) => {
    // throw err;

    return Promise.reject(err);
  }
);

export default axios;
