import React from "react";

export const Balance = ({ balance }) => {
  const amounts = balance.map((transaction) => transaction.amount_due);

  const total = amounts.reduce((acc, item) => (acc -= item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
