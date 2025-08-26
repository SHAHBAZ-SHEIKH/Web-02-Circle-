import React, { useEffect, useState } from 'react'
import * as yup from "yup"

export const Addstudent = ({onAddHandler,currentStudent,onCurrentStudentUpdate}) => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [education,setEducation] = useState("")
    let schema = yup.object().shape({
        name: yup.string().min(3).required("please enter your name"),
        email: yup.string().email("please valid email").required("email is required"),
         education: yup.string().required("please enter your Eductaion"),
    })

    const addStudent = async()=>{
        console.log("name===>",name)
        console.log("email===>",email)
        console.log("education===>",education)

       

        let data = {
            name,
            email,
            education
        }

        try {
            let result = await schema.validate(data)
            console.log(result)
            {
                currentStudent ? onCurrentStudentUpdate(data,currentStudent.id) :onAddHandler(data)
            }
            
        } catch (error) {
            console.log(error)
            
        }
        
    }

    useEffect(()=>{
        if(currentStudent){
            setEmail(currentStudent.email)
            setName(currentStudent.name)
            setEducation(currentStudent.education)
        }
    },[currentStudent])
  return (
    <div>

        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Your Name' />
        <br />
        <br />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' />
         <br />
        <br />
        <input value={education} onChange={(e)=>setEducation(e.target.value)} type="text" placeholder='Enter Your Education' />
         <br />
        <br />
        <button onClick={addStudent}>{currentStudent ? "Update" :"ADD"} Student</button>
    </div>
  )
}
