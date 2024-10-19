import React, { useEffect, useState } from 'react';
import { getBalanceSheet } from '../api/api';

const BalanceSheet = () => {
  const [balanceSheet, setBalanceSheet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBalanceSheet();
      setBalanceSheet(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Balance Sheet</h2>
      <ul>
        {balanceSheet.map((entry) => (
          <li key={entry.id}>{entry.description}: {entry.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default BalanceSheet;
