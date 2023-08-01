import { instance as axios } from "../../config";

const register = async (user: any) => {
  const response = await axios.post("/signup", user);

  console.log("register data", response.data);

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

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const verifyEmail = async (email: string) => {
  const response = await axios.post(`/verify-email?email=${email}`);

  return response.data;
};

const resetPassword = async (email: string) => {
  const response = await axios.post(`/password-reset-link`, email);

  return response.data;
};

export const authService = {
  register,
  login,
  logout,
  verifyEmail,
  resetPassword
};

