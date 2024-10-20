// src/components/ExpenseList.js
import React, { useEffect, useState } from 'react';
import { getExpenses } from '../api/api';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await getExpenses();
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            Amount: {expense.amount}, Split Type: {expense.splitType}
            <ul>
              {expense.participants.map(participant => (
                <li key={participant.user}>User: {participant.user}, Percentage: {participant.percentage}%</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
