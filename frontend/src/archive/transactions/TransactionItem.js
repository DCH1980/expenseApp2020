import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TransactionContext from '../../context/transactions/transactionContext'

const TransactionItem = ({ transaction }) => {
  const transactionContext = useContext(TransactionContext)
  const { deleteTransaction, setCurrent, } = transactionContext;

  const { id, name, label, auto_pay, amount_due, due_date } = transaction;

  const onDelete = () => {
    deleteTransaction(id);
    clearCurrent();
  }

  return


}

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default TransactionItem