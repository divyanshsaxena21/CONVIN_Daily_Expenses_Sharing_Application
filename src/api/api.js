import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust the backend URL

export const createUser = async (userData) => {
  return await axios.post(`${API_URL}/users`, userData);
};

export const addExpense = async (expenseData) => {
  return await axios.post(`${API_URL}/expenses`, expenseData);
};

export const getUserExpenses = async (userId) => {
  return await axios.get(`${API_URL}/expenses/user/${userId}`);
};

export const getBalanceSheet = async () => {
  return await axios.get(`${API_URL}/expenses/balancesheet`);
};
