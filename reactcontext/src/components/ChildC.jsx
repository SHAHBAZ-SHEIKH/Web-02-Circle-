import React, { useContext } from 'react'
import expenseContext from '../context/ExpenseContext'
// import { userLoginContext } from '../App'

const ChildC = () => {

    // const value = useContext(userLoginContext)

    // console.log(value)

    const {expense} = useContext(expenseContext)

    console.log(expense)



  return (
    <div>
        Mai Team ka Player ho
    </div>
  )
}

export default ChildC