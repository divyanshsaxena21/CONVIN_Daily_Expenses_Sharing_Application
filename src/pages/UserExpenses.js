import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserExpenses = () => {
  const { userId } = useParams(); // Get userId from URL
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchUserExpenses = async () => {
      const response = await fetch(`/api/expenses/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setExpenses(data);
      }
    };

    fetchUserExpenses();
  }, [userId]);

  return (
    <div>
      <h2>User Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.amount} - {expense.splitType}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserExpenses;
