import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`/api/users/${email}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        alert('User not found');
      }
    };

    fetchUserData();
  }, [email]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Mobile Number: {user.mobileNumber}</p>
    </div>
  );
};

export default UserProfile;
