import axios from "axios"
import { useEffect, useState } from "react"



function App() {

  const [postText,setPostText] = useState("")
  const [postImage,setPostImage] = useState("")
  const [postDesc,setDesc] = useState("")
  const [allPost,setAllPost] = useState([])
  const [updateId,setUpdateId] = useState(null)


  //Get All Post

  const getPost = async()=>{
    try {
      const postget = await axios.get("https://68add2d1a0b85b2f2cf4c69e.mockapi.io/post")
      console.log("PostGet===>",postget.data)
      setAllPost(postget?.data)
       console.log("allPost===>",allPost)

     
    } catch (error) {
      console.log(error)
      
    }
    
  }
  useEffect(()=>{
    getPost()
  },[])


  //post Create

  const postHandler = async()=>{
    console.log("test")
    console.log("PostText====>",postText)
     console.log("PostImage====>",postImage)
      console.log("PostDesc====>",postDesc)

      const postData = {
        postText,
        postImage,
        postDesc
      }

      try {
         const res = await axios.post("https://68add2d1a0b85b2f2cf4c69e.mockapi.io/post",postData)
         getPost()
      console.log("res====>",res)
      } catch (error) {
        console.log(error)
        
      }

     

  }

   console.log("allPost===>",allPost)

   const deleteHandler =async (id)=>{
    console.log("id===>",id)
    try {
      const delpost = await axios.delete(`https://68add2d1a0b85b2f2cf4c69e.mockapi.io/post/${id}`)
      getPost()
    } catch (error) {
      console.log("error",error)
      
    }
    
   }


   const updateHandler = (id,post)=>{
    console.log(id,post)
    setUpdateId(id)
    setPostText(post.postText)
    setPostImage(post.postImage)
    setDesc(post.postDesc)
   }


   const editPostHandler = async()=>{

    const updatePost ={
      postDesc,
      postImage,
      postText
    }

    try {
      const editPost= await axios.put(`https://68add2d1a0b85b2f2cf4c69e.mockapi.io/post/${updateId}`,updatePost)
      getPost()
      console.log(editPost)
    } catch (error) {
      console.log(error)
    }

   }
  


  return (
    <>
     
     <input value={postText} type="text" placeholder="Enter Post Text" onChange={(e)=>setPostText(e.target.value)}/>
     <br /> <br />

     <input value={postImage} type="text" placeholder="Enter Post Image"  onChange={(e)=>setPostImage(e.target.value)} />
       <br /> <br />

       <input value={postDesc} type="text" placeholder="Enter Post Description" onChange={(e)=>setDesc(e.target.value)}/>
         <br /> <br />

         {
          updateId ? <button onClick={editPostHandler}>Update Post</button> : <button onClick={postHandler}>Create Post</button>
         }

         <hr />

         <h1>Post</h1>

         {
          allPost.map((post)=>(
            <div>
              <h1>{post.postText}</h1>
              <img src={post.postImage} alt="" style={{width:"200px",height:"200px"}} />
              <p>{post.postDesc}</p>
              <div style={{display:"flex",flexDirection:"row", gap:"10px"}}>
                <button onClick={()=>updateHandler(post.id,post)}>Edit Post</button>
                <button onClick={()=>deleteHandler(post.id)}>Delete</button>
              </div>
            </div>
          ))
         }
    </>
  )
}

export default App
