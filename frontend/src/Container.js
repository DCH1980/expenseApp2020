import React from "react";
import TransactionState from './context/transactions/TransactionState'
import { Transactions } from './components/transactions/Transactions'
import { Balance } from './archive/Balance'
import AddTransaction from "./components/transactions/AddTransaction";

import Table from "./archive/complexTable/Table";


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
