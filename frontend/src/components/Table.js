import React from 'react'
import { AllPurchases } from './AllPurchases'
import { TableHead } from './TableHead'


export const Table = () => {
  return (
    <table className="table table-striped"> 
      <TableHead />
      <AllPurchases />
    </table>
  )
}
