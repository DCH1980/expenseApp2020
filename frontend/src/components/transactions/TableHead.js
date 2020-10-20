import React from "react";


const TableHead = ({ transactions }) => {
  const dues = transactions.amount_due.map((amount) =>
    <div>{amount.amount_due}</div>)
  
  return <div>{amounts}</div>;
};

export default TableHead