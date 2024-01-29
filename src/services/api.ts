import axios from "axios";

export const getBaseUrl = () => {
  return window.location.origin;
};

export const client = axios.create();

client.interceptors.request.use((config) => {
  config.baseURL = getBaseUrl();
  return config;
});
