import axios from "axios";

const axiosCall = axios.create({
  baseURL: "http://localhost/HomeRentServer/v1/", // Set your default base URL here
});

export default axiosCall;
