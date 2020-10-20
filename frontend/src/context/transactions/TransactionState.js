import React, { useReducer} from 'react'
import axios from 'axios'
import TransactionContext from './transactionContext'
import transactionReducer from './transactionReducer'
import { GET_ALL, ADD_TRANSACTION, DELETE_TRANSACTION, TRANSACTION_ERROR, SET_CURRENT, UPDATE_TRANSACTION, CLEAR_CURRENT, FILTER_TRANSACTIONS } from '../../axios/types/types'

const TransactionState = ({ children }) => {
  const initialState = {
    transactions: [],
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  //Get transactions
  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/expense');
      dispatch({
        type: GET_ALL,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg
      });
    }
  }
  //add Transaction
  const addTransaction = async transaction => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/expense', transaction, config);

      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.msg
      });
    }
  }

  // delete transaction
  const deleteTransaction = async id => {
  try {
    await axios.delete(`/api/expense/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.msg
    })
  }
  }
  //set Current Transaction
  const setCurrent = transaction => {
    dispatch({
      type:SET_CURRENT, payload: transaction
    })
  }

  //clear current
  const clearCurrent = transaction => {
    dispatch({type: CLEAR_CURRENT, payload: transaction})
  }

  //filter transactions
  const filterTransactions = text => {
    dispatch({
      type: FILTER_TRANSACTIONS, payload: text
    })
  }

  //clear filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER})
  }
  
  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        filtered: state.filtered,
        current: state.current,
        error: state.error,
        getTransactions,
        addTransaction,
        deleteTransaction,
        setCurrent,
        clearCurrent,
        filterTransactions,
        clearFilter,
      }}>
      {children}
      </TransactionContext.Provider>
  )
}

export default TransactionState