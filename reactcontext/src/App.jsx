import { createContext, useState } from "react"
import ChildA from "./components/ChildA"
import ChildC from "./components/ChildC"
import ChildB from "./components/ChildB"
import ChildD from "./components/ChildD"
import { ExpenseProvider}  from "./context/ExpenseContext"
// import PlayerProvider from "./context/ExpenseContext"


//  const userLoginContext = createContext()



function App() {

  const [user, setUser] = useState("Shahbaz")

  return (
    <>
      {/* <userLoginContext.Provider value={user} > */}
      {/* <ChildA /> */}
      {/* <PlayerProvider>
        <ChildA />
        <ChildB />
        <ChildC />

      </PlayerProvider> */}

      <ExpenseProvider>
        <ChildA />
        <ChildB />
        <ChildC />
        <ChildD />


      </ExpenseProvider>


      {/* </userLoginContext.Provider> */}

    </>
  )
}

export default App


// export {userLoginContext}

