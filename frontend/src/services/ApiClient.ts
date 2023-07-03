import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  name?: string;
  next: boolean;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // DEV
  // baseURL: "https://gamehub-api.onrender.com/",
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) =>
        res.data.name === "AxiosError" ? Promise.reject(res.data) : res.data
      );
}

export default ApiClient;
