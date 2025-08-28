import React, { useContext, useState } from 'react'
import expenseContext from '../context/ExpenseContext'
// import ChildC from './ChildC'
// import { playerContext } from '../context/playerContext'



const ChildB = () => {
    // const {playerName,score,setPlayerName,setScore} = useContext(playerContext)

    const [expenseTitle,setExpenseTitle] = useState("")
    const [expenseAmount,setExpenseAmount] = useState(0)

    const {expenseData} = useContext(expenseContext)

    const addExpenseHandler = ()=>{
        console.log("expenseTitle===>",expenseTitle)
        console.log("expenseAmount====>",expenseAmount)
        expenseData({expenseTitle,expenseAmount})

    }

  return (
    <div style={{marginTop:"30px"}}>
        {/* <h1>Change Player:{playerName}</h1>
        <h1>Player Score: {score}</h1>
        <button onClick={()=>setPlayerName("Shaheen")}>Player CHnage</button>
        <button onClick={()=>setScore(score + 1)}>Change Score</button> */}


        <input onChange={((e)=>setExpenseTitle(e.target.value))} type="text" placeholder='Enter Your Expense Title' />

        <br /> <br />
        <input onChange={((e)=>setExpenseAmount(e.target.value))} type="text" placeholder='Enter Your Expense Amount' />
        <br />
        <button onClick={addExpenseHandler}>Expense Add</button>
    </div>
  )
}

export default ChildB