import React from 'react';
import { Link } from 'react-router-dom';
import './css/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to the Daily Expenses Sharing App</h1>
      <p className="homepage-description">This app allows you to manage and split expenses among friends.</p>
      <ul className="homepage-links">
        <li className="homepage-link-item"><Link className="homepage-link" to="/users">Add User</Link></li>
        <li className="homepage-link-item"><Link className="homepage-link" to="/add-expense">Add Expense</Link></li>
        <li className="homepage-link-item"><Link className="homepage-link" to="/balance-sheet">View Balance Sheet</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
