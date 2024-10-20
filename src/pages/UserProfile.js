import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchEmail, setSearchEmail] = useState(''); // Initialize as an empty string

  const fetchUserData = async (email) => {
    if (email) {
      setLoading(true); // Set loading state
      try {
        const response = await fetch(`http://localhost:5000/api/users/${email}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null); // Clear user if not found
          alert('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Error fetching user data');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUserData(searchEmail); // Fetch data on search
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSearch}>
        <input
          type="email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          placeholder="Enter user email" // Keeps the placeholder for clarity
          required
        />
        <button type="submit">Search</button>
      </form>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile Number:</strong> {user.mobileNumber}</p>
        </div>
      ) : (
        <p>No user details available.</p>
      )}
    </div>
  );
};

export default UserProfile;
