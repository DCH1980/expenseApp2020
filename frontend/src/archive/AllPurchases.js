import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export const AllPurchases = () => {
  const [expenses, getExpenses] = useState([]);

  useEffect(() => {
    axios.get("api/expense").then((response) => getExpenses(response.data));
  }, []);


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
