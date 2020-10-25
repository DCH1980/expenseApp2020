import React from "react";
import TransactionState from './context/transactions/TransactionState'
import { Transactions } from './components/transactions/Transactions'
import { Balance } from './components/Balance'
import AddTransaction from "./components/transactions/AddTransaction";

import Table from "./components/complexTable/Table";


const Container = () => {
  return (
    <TransactionState>
      <Transactions />
      <AddTransaction />
      <Table />
         </TransactionState>
    
  );
};

export default Container;
