import React from 'react'
import TableRows from './TableRows'

const TableBody = ({transactions}) => {
  return (
    <tbody>
      <TableRows props={transactions} />
    </tbody>
  )
}

export default TableBody
