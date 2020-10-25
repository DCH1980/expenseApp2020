import React, { useContext, useState } from 'react'
import { addTransaction } from '../../axios/actions';
import TransactionContext from '../../context/transactions/transactionContext'


const AddTransaction = () => {
  const transactionContext = useContext(TransactionContext)

  const { AddTransaction } = transactionContext;

  const [transaction, setTransaction] = useState({
    name: "",
    label: "",
    auto_pay: true,
    amount_due: 0,
    due_date: "",
  })

  const { name, label, auto_pay, amount_due, due_date } = transaction

  const onChange = event => setTransaction({...transaction, [e.target.name]: e.target.value})


  const onSubmit = event => {
    addTransaction(transaction)
  }

  return (
    <div>
      
    </div>
  )
}

export default AddTransaction
