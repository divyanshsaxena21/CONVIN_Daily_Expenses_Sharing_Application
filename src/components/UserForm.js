import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, mobileNumber }),
    });
    // Optionally reset form or handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Mobile Number" onChange={(e) => setMobileNumber(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserForm;

// import React, { useState } from 'react';
// import { createUser } from '../api/api';

// const UserForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', mobileNumber: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createUser(formData);
//       alert('User created successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error creating user');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" type="text" placeholder="Name" onChange={handleChange} />
//       <input name="email" type="email" placeholder="Email" onChange={handleChange} />
//       <input name="mobileNumber" type="text" placeholder="Mobile Number" onChange={handleChange} />
//       <button type="submit">Create User</button>
//     </form>
//   );
// };

// export default UserForm;
