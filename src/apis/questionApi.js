import apiClient from "./apiClient";

export const updateMultipleQuestions = async (data) => {
  const res = await apiClient.put("/api/question/update-multiple", data);
  return res.data;
};

export const submitMultipleQuestions = async (data) => {
  const res = await apiClient.put("/api/question/submit", data);
  return res.data;
};

export const getPreviousQuestions = async (data) => {
  const res = await apiClient.get(`/api/question/get/${data.goalId}/${data.setNumber}`);
  return res.data;
};

export const getQuestionsByGoal = async (goalId) => {
  const res = await apiClient.get(`/api/question/getquestions/${goalId}`);
  return res.data;
};