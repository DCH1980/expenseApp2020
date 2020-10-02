import React from "react";

export const AllPurchases = ({ expenses }) => {
  const myItems = expenses.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.label}</td>
      <td>{item.auto_pay.toString()}</td>
      <td>{item.amount_due}</td>
      <td>{item.due_date}</td>
      <td></td>
    </tr>
  ));

  return <tbody>{myItems}</tbody>;
};
