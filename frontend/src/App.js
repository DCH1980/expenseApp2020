import React from "react";
import TransactionState from './context/transactions/TransactionState'
import { Transactions } from './components/transactions/Transactions'
import { Balance } from './components/Balance'


const App = () => {
  return (
    <TransactionState>
      <Transactions />
    </TransactionState>
    
  );
};

export default App;
