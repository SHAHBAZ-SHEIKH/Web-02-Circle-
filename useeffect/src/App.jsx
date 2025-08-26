import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await result.json();
      setPost(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {
        loading ? (
          <p>Loading Posts</p>
        )
        :
        (
          <ul>
            {
              post.map((item,index)=>(
              <li key={index}>{item.title}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;
