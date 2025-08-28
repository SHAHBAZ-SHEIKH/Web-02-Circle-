import React, { useContext, useState } from 'react'
import expenseContext from '../context/ExpenseContext'
// import { playerContext } from '../context/playerContext'


const ChildA = () => {

    // const {playerName} = useContext(playerContext)

    const [amout,setAmount] = useState()

    const {addIncome} = useContext(expenseContext)

    const addIncomeHandler = ()=>{
        console.log("AMount===>",amout)
        addIncome(amout)
    }
  return (
    <div>
        {/* <h1>Game Starter by Player Name:{playerName}</h1> */}
        <input onChange={(e)=>setAmount(e.target.value)} type="number" placeholder='Enter Your Income' />

        <button onClick={addIncomeHandler}>Add Income</button>
    </div>
  )
}

export default ChildA