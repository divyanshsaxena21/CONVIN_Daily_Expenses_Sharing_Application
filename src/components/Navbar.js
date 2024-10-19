import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Add User</Link></li>
        <li><Link to="/user/:email">User Profile</Link></li>
        <li><Link to="/add-expense">Add Expense</Link></li>
        <li><Link to="/balance-sheet">View Balance Sheet</Link></li>
        <li><Link to="/user-expenses/:userId">View User Expenses</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
