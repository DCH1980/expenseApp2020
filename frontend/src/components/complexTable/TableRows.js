import React, { useContext } from 'react'
import _ from 'lodash'
import TransactionContext from '../../context/transactions/transactionContext'
import TableRowData from './TableRowData'

// function Rows(props) {
//   return <td>{props.item}</td>
// }
const TableRows = () => {
  const transactionContext = useContext(TransactionContext)

  const { transactions } = transactionContext;
  console.log(Object.values(transactions))
  let art = Object.values(transactions)

  for(const property in art) {
    console.log(property);
  }
  const articlesJsx = Object.values(transactions).map((item, index) => 
  <TableRowData key={index} />
  );
  console.log('article', articlesJsx)
  for(const property in articlesJsx) {
    console.log('property',property);
  }
  return (
    <tr>{articlesJsx}</tr>
    )
    
  
}

export default TableRows
