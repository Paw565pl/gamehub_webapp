import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000", // DEV
  // baseURL: "https://gamehub-api.onrender.com/",
});
