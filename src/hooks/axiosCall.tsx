import axios from "axios";

const axiosCall = axios.create({
  baseURL: "http://192.168.100.3/HomeRentServer/v1/", // Set your default base URL here
});

export default axiosCall;
