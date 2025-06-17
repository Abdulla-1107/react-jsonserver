import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use((config) => {
  return config;
});
