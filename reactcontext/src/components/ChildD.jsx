import React, { useState } from 'react'
import { useContext } from 'react'
import expenseContext from "../context/ExpenseContext"

const ChildD = () => {

    const {income} = useContext(expenseContext)


  return (
    <div>
        <h1>Total Income: {income}</h1>
        <h1>Total Expense:</h1>
    </div>
  )
}

export default ChildD