import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'


export default function Table({transactions}) {
  return (
    <table>
      <TableHead props={transactions} />
      <TableBody props={transactions}/>
    </table>
  )
}
