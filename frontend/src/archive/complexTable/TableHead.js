import React from 'react'
import TableColumns from './TableColumns'

const TableHead = ({transactions}) => {
  return (
    <thead>
      <TableColumns props={transactions} />
    </thead>
  )
}

export default TableHead
