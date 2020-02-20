import axios from "axios";

const baseURL = "http://localhost:3000/auth";

const authService = axios.create({
  baseURL,
  withCredentials: true
});

export const login = async (username, password) => {
  const { data } = await authService.post("/login", { username, password });
  return data;
};
export const signup = async (username, password) => {
  const { data } = await authService.post("/signup", { username, password });
  return data;
};
export const logout = async () => {
  await authService.get("/logout");
};
