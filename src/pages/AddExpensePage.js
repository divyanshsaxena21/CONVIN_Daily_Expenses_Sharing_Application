import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import './css/FormPage.css'
const AddExpensePage = () => {
  return (
    <div>
      <h2>Add a New Expense</h2>
      <ExpenseForm />
    </div>
  );
};

export default AddExpensePage;
