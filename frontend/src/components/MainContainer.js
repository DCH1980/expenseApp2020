import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header } from "./Header";
import { AllPurchases } from "./AllPurchases";
import { Total } from "./Total";
import { Balance } from "./Balance";
import AddTransaction from "./AddTransaction";

export const MainContainer = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("api/expense").then((response) => setExpenses(response.data));
  }, []);
  return (
    <Fragment>
      <Balance balance={expenses} />
      <table className="table table-striped">
        <Header />
        <AllPurchases expenses={expenses} />
      </table>
      <Total amount={expenses} />
      <AddTransaction />
    </Fragment>
  );
};
