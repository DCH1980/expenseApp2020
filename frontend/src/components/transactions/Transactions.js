import React, { Fragment, useContext, useEffect } from 'react';
import Balance from '../Balance'

import TransactionContext from '../../context/transactions/transactionContext'

export const Transactions = () => {
  const transactionContext = useContext(TransactionContext)

  const { transactions, getTransactions, loading } = transactionContext;
  const { amount_due } = transactions

  useEffect(() => {
    getTransactions();
  }, [])
 
  
  const myItems = transactions.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.label}</td>
      <td>{item.auto_pay.toString()}</td>
      <td>{item.amount_due}</td>
      <td>{item.due_date}</td>
      <td></td>
    </tr>
  ));

  return <Fragment>
    <Balance amount={transactions} />
    
    <table className="table table-striped">
  
    <tbody>{myItems}</tbody>
    </table>
  </Fragment>;
}


