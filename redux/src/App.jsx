import { useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './featured/countSlice'

function App() {
  const [count, setCount] = useState(0)
  // const myCount = useSelector((state)=>state?.counter?.value)
  // const dispatch = useDispatch()

  // console.log("MYCount===>",myCount)

  let valRef = useRef(1)
  let btnRef = useRef("")
  const handleClick = ()=>{
    // console.log("test")
    valRef.current = valRef.current +1
   setCount(count + 1)
  //  console.log("value of val==>",valRef.current)
    // dispatch(increment())

  }

  // useEffect(()=>{
  //   console.log("jb jb satate ki value change hogi mai chaloga")
  // })

  // const handleDecremnet = ()=>{
  //   dispatch(decrement())
  // }

  // const handleAmount = ()=>{
  //   dispatch(incrementByAmount(6))
  // }

  const expensiveCalculte = (num)=>{
    console.log("expnesive Calculation")
    for(var i=0; i<1000000000; i++){

    }
    return num*2

  }

  let douBleValue = useMemo(() => expensiveCalculte(2), [count])

  const chnageButtonColor = ()=>{
    console.log("test")
    btnRef.current.style.backgroundColor = "red"

  }

  return (
    <>
      <h1>Hello : {count}</h1>

      <button ref={btnRef} onClick={handleClick}>click</button>

      <br /> <br /> 
      <h1>DoubleValue:{douBleValue}</h1>

      <button onClick={chnageButtonColor}>Change color 1st Button</button>
      {/* <br /> <br />
      <button onClick={handleDecremnet}>Decrement</button>
      <br /> <br />
      <button onClick={handleAmount}>Icrement By Amount</button> */}
    </>
  )
}

export default App
