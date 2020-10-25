import { array } from 'prop-types'
import React, { Fragment, useContext, useState } from 'react'
import TransactionContext from '../../context/transactions/transactionContext'
import _ from 'lodash'



const Loop = () => {
  const transactionContext = useContext(TransactionContext)

  const { transactions } = transactionContext
  const { id, name, label, auto_pay, amount_due, due_date } = transactions

  
  
 
  function getHeaders(input) {
    if (input.length > 0) {
      let cols = [],
        columnsIn = input[0];
      for (var key in columnsIn) {
        cols.push(key);
      }
      return cols;
    }
  }

  console.log(getHeaders(transactions))

  // this chunk gets the  column names of the genes object
  if (transactions.length > 0) {
    let cols = [],
      columnsIn = transactions[0];
    for (var key in columnsIn) {
      cols.push(key);
    }
    return cols;
  }
  
  const rows = () =>{transactions.map((key, index) => {
      return <td key={transactions.transactions[key]}> {transactions.transactions[key]}</ td>
    }
    )
  }
  return <Fragment>
    <table>
    <tbody>{rows}</tbody>
    </table>
   
    </Fragment>
}


export default Loop