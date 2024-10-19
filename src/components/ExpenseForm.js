import React, { useState } from 'react';

const ExpenseForm = ({ userId }) => {
  const [amount, setAmount] = useState('');
  const [splitType, setSplitType] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, splitType, participants, userId }), // Include userId
    });
    // Optionally reset form or handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} required />
      <input type="text" placeholder="Split Type" onChange={(e) => setSplitType(e.target.value)} required />
      {/* Participants input handling */}
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

// import React, { useState } from 'react';
// import { addExpense } from '../api/api';

// const ExpenseForm = () => {
//   const [formData, setFormData] = useState({ amount: '', participants: '', splitType: 'equal' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addExpense(formData);
//       alert('Expense added successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error adding expense');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="amount" type="number" placeholder="Amount" onChange={handleChange} />
//       <input name="participants" type="text" placeholder="Participants" onChange={handleChange} />
//       <select name="splitType" onChange={handleChange}>
//         <option value="equal">Equal</option>
//         <option value="exact">Exact</option>
//         <option value="percentage">Percentage</option>
//       </select>
//       <button type="submit">Add Expense</button>
//     </form>
//   );
// };

// export default ExpenseForm;
