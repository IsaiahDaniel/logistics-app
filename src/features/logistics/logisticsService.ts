import { instance as axios } from "../../config";

const createHaulage = async (haulageData: any) => {
  const response = await axios.post("/signup", haulageData);

  console.log("haulageData", response.data);

  return response.data;
};

const login = async (user: any) => {
  const response = await axios.post("/login", user);

  if (response.data && response.status === 200) {
    localStorage.setItem("user", JSON.stringify(response.data.response));
    localStorage.setItem("token", JSON.stringify(response.data.response));
  }

  console.log("login data", response.data);

  return response.data;
};


export const logisticsService = {
  createHaulage,
};

