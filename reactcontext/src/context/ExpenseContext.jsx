// import { createContext, useState } from "react";

import { createContext, useState } from "react";




// const playerContext = createContext()

// const PlayerProvider = ({children})=>{

//     const [playerName,setPlayerName] = useState("Shahbaz")
//     const [score,setScore] = useState(0)

//     return(
//         <playerContext.Provider value={{playerName,score,setPlayerName,setScore}}>
//             {children}

//         </playerContext.Provider>
//     )

// }


// export default PlayerProvider
// export {playerContext}


const expenseContext = createContext()

const ExpenseProvider = ({children})=>{
    const [income,setIncome] = useState(0)
    const [expense,setExpense] = useState([])

    const addIncome = (amonut)=>{
        setIncome((prev)=>prev + parseInt(amonut))
    }

    const expenseData = ({expenseTitle,expenseAmount})=>{
        console.log(expenseTitle,expenseAmount)
        const newExpense = {
            id:new Date().now,
            expenseTitle,
            expenseAmount
        }


        setExpense([...expense,newExpense])

    }


    return(
        <>


        <expenseContext.Provider value={{income,addIncome,expenseData}}>
            {children}

        </expenseContext.Provider>
        </>


    )
}

export default expenseContext
export {ExpenseProvider}