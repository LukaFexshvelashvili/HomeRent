import axios from "axios";

const axiosCall = axios.create({
  baseURL: "http://localhost/ONHOMEServer/v1/", // Set your default base URL here
});

export default axiosCall;
