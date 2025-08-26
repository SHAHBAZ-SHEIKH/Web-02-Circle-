import { useState } from "react"
import { data } from "./assets/constant/data"
import Table from "./assets/Table"
import { Addstudent } from "./assets/Addstudent"

function App() {

  console.log(data)

  const [mydata, setMyData] = useState([
    {
      id: 1,
      name: "Shahbaz",
      email: "ashabaz@gmail.com",
      education: "BSCS"
    },
    {
      id: 2,
      name: "Ahmed",
      email: "ahmed@gmail.com",
      education: "BSCS"
    },
    {
      id: 3,
      name: "Zubair",
      email: "zubair@gmail.com",
      education: "BSCS"
    },
    {
      id: 4,
      name: "Umer",
      email: "umer@gmail.com",
      education: "BSCS"
    },
    {
      id: 5,
      name: "Murtaza",
      email: "murtaza@gmail.com",
      education: "BSCS"
    }
  ])
  const [currentStudent,setCurrentStudent] = useState(null)

  const num = [20, 30, 40]

  // const result = num.map((value)=>{
  //   return value *4
  // })

  const clickHandler = (id) => {
    console.log("Button Call on Parent Component", id)
    let results = mydata.filter((item) => item.id != id)

    console.log(results)
    setMyData(results)
  }


  const updateHandler = (student)=>{
    console.log(student)
    setCurrentStudent(student)

  }

  const onAddHandler = (data) => {
    console.log("New Student Data Sent,", data)
    setMyData([...mydata,{
      id:mydata.length +1,
      name:data.name,
      email:data.email,
      education:data.education
    }])
  }

  const onCurrentStudentUpdate = (student,id)=>{
    console.log("Student===>",student,id)
    
    let newData = mydata.map((item)=>{
      if(item.id == id){
        console.log("Haa Hogaya hai")
        return{
          ...item,
          name:student.name,
          email:student.email,
          education:student.education
        }
        
      }
      return item
    })

    setMyData(newData)

  
  }


  return (
    <div>

      <Addstudent onCurrentStudentUpdate={onCurrentStudentUpdate} currentStudent={currentStudent} onAddHandler={onAddHandler} />
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <tr>
          <th style={{ border: "1px solid black" }}>Id</th>
          <th style={{ border: "1px solid black" }}>Name</th>
          <th style={{ border: "1px solid black" }}>Email</th>
          <th style={{ border: "1px solid black" }}>Education</th>
        </tr>





        {
          mydata.map((item) => {
            return (<Table item={item} clickHandler={clickHandler} updateHandler={updateHandler} />

            )
          })
        }


      </table>
    </div>
  )
}

export default App
