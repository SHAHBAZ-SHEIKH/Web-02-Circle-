import React from 'react'

const ChipCategpry = ({cat,onclick,isChoosen}) => {
  return (
    <div onClick={onclick} className={`${isChoosen ? "bg-green-500 text-white":"bg-red-600 text-white"}rounded p-2 m-2 cursor-pointer`}>
        <h1>{cat.name}</h1>
    </div>
  )
}

export default ChipCategpry