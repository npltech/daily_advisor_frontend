import apiClient from "./apiClient";

export const updateMultipleQuestions = async (data) => {
  const res = await apiClient.put("/api/question/update-multiple", data);
  return res.data;
};