import apiClient from "./apiClient";

export const loginApi = async (credentials) => {
  const res = await apiClient.post("/api/user/login", credentials);
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await apiClient.post("/api/user/register", userData);
  return res.data;
};

export const updateUser = async (userData) => {
  const res = await apiClient.put("/api/user/update", userData);
  return res.data;
};