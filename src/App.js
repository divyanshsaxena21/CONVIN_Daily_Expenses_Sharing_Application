import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExpensePage from './pages/AddExpensePage';
import UserPage from './pages/UserPage';
import BalanceSheetPage from './pages/BalanceSheetPage';
import UserProfile from './pages/UserProfile';
import UserExpenses from './pages/UserExpenses';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/user/:email" element={<UserProfile />} />
        <Route path="/add-expense" element={<AddExpensePage />} />
        <Route path="/balance-sheet" element={<BalanceSheetPage />} />
      <Route path="/user-expenses/:userId" element={<UserExpenses />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
