import React, {useContext} from 'react'
import TransactionContext from '../../context/transactions/transactionContext'

const TransactionItem = ({ transaction }) => {
  const transactionContext = useContext(TransactionContext);
  const { deleteTransaction } = transactionContext;
  const { id, name, label, amount_due, date_due } = transaction;

  const onDelete = () => {
    deleteTransaction(id)
  };

  return (
    <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
  )
}

export default TransactionItem
