import apiClient from "./apiClient";

export const createConversation = async (credentials) => {
  const res = await apiClient.post("/api/conversation/create", credentials);
  return res.data;
};

export const getConversationList = async () => {
  const res = await apiClient.get("/api/conversation/get");
  return res.data;
};

export const getConversationById = async (id) => {
  const res = await apiClient.post(`/api/${id}`);
  return res.data;
};