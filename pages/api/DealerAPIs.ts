import axios from "axios";

const API = axios.create({
  baseURL: "https://b2b.motionview.com.bd/api",
});

API.interceptors.request.use((req: any) => {
  try {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("token") || ""
    )}`;
  } catch (error) {
    console.warn("No token found");
  }
  return req;
});

// export const dealerLogin = async (dealerInfo) => {
//   const res = await API.post("/dealer/login", dealerInfo);
//   return res;
// };

export default API;
