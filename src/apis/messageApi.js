import apiClient from "./apiClient";

export const createMessage = async (data) => {
  const res = await apiClient.post("/api/message/create", data);
  return res.data;
};

export const getMessagesByConversation = async (id) => {
  const res = await apiClient.get(`/api/message/${id}`);
  return res.data;
};