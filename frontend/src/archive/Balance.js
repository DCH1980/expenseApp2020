import React, { useContext } from "react";
import TransactionContext from '../context/transactions/transactionContext'

export const Balance = ({ amount }) => {
  

  const balance = amount.map((transaction) => transaction.amount_due);
  console.log(balance);

  const total = balance.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance