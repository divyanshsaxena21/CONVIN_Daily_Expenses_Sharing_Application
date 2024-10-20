import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this if your backend URL is different

// Users API
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data; // Return response data
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Optionally rethrow to handle it in the component
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Rethrow if needed
  }
};

// Expenses API
export const createExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${API_URL}/expenses`, expenseData);
    return response.data; // Return response data
  } catch (error) {
    console.error('Error creating expense:', error);
    throw error; // Rethrow if needed
  }
};

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${API_URL}/expenses`);
    return response.data; // Return the expense data
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error; // Rethrow if needed
  }
};

export const fetchUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users/${email}`);
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error; // Rethrow if needed
  }
};

export const getBalanceSheet = async () => {
  try {
    const response = await axios.get(`${API_URL}/expenses/balancesheet`);
    return response.data; // Return the balance sheet data
  } catch (error) {
    console.error('Error fetching balance sheet:', error);
    throw error; // Rethrow if needed
  }
};
