import React, { Fragment, useContext} from 'react'
import TransactionContext from '../../context/transactions/transactionContext'
import Table from './Table'
const Container = () => {
  const transactionContext = useContext(TransactionContext)
  const { transactions } = transactionContext;
  return (
    <Table transactions={transactions} />
  )
}

export default Container
