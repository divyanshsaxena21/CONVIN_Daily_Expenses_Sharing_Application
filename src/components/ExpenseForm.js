import React, { useState } from 'react';

const ExpenseForm = () => {
  const [email, setEmail] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [amount, setAmount] = useState('');
  const [splitType, setSplitType] = useState('equal'); // Default to 'equal'
  const [participants, setParticipants] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state
    setSuccessMessage(''); // Reset success message

    try {
      // Fetch user details by email
      const userResponse = await fetch(`http://localhost:5000/api/users/${email}`);
      
      if (!userResponse.ok) {
        throw new Error('User not found');
      }

      const userData = await userResponse.json();
      setUserDetails(userData);

      // Prepare participants
      const participantList = participants.split(',').map(participant => participant.trim());
      
      // Add the expense
      const expenseResponse = await fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, splitType, participants: participantList, userId: userData._id }), // Use userId from user data
      });

      if (!expenseResponse.ok) {
        throw new Error('Failed to add expense');
      }

      setSuccessMessage('Expense added successfully!');
      // Reset the form
      setAmount('');
      setParticipants('');
      setSplitType('equal');
      setEmail('');
      setUserDetails(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="User Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      {userDetails && (
        <div>
          <p>User Found: {userDetails.name} ({userDetails.email})</p>
        </div>
      )}
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        required 
      />
      <select value={splitType} onChange={(e) => setSplitType(e.target.value)}>
        <option value="equal">Equal</option>
        <option value="exact">Exact</option>
        <option value="percentage">Percentage</option>
      </select>
      <input 
        name="participants" 
        type="text" 
        placeholder="Participants (comma-separated)" 
        value={participants} 
        onChange={(e) => setParticipants(e.target.value)} 
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Expense'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
};

export default ExpenseForm;
