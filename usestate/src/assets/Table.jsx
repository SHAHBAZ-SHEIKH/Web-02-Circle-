import React from 'react'

const Table = ({item,clickHandler,updateHandler}) => {

    

    console.log("item=====>",item)
    return (
        <tr>
            <td style={{ border: "1px solid black" }}>{item.id}</td>
            <td style={{ border: "1px solid black" }}>{item.name}</td>
            <td style={{ border: "1px solid black" }}>{item.email}</td>
            <td style={{ border: "1px solid black" }}>{item.education}</td>
            <td> <button onClick={()=>clickHandler(item.id)} style={{backgroundColor:"aqua"}}>Delete</button></td>
            <td> <button onClick={()=>updateHandler(item)} style={{backgroundColor:"aqua"}}>Edit</button></td>
           
           
        </tr>
    )
}

export default Table