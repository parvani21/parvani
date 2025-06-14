import React from 'react'
import { useState, useEffect } from 'react'

const FetchApi = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(()=>{
      const fetchPost = async() =>{
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data);
        setPosts(data)
      } catch (error) {
        setError(error.message)
      }finally{
        setIsLoading(false)
      }
      
      }
        fetchPost()

    }, [])
  return (
    <div>
      <h1>fetch api</h1>
      {isLoading?(<p1>loading post...</p1>):error ?(
       <p>{Error}</p>
      ) : (
        <div>
            {posts.length > 0 ? (
                posts.map((post)=>(
                    <div>
                        <h2>{post.id}</h2>
                        <p1>{post.title}</p1>
                        <p1>{post.body}</p1>
                        <h2>{post.userId}</h2>
                    </div>
                ))
            ):(<p1>no api found</p1>)
            }
        </div>
      )}
    </div>
  )

}
export default FetchApi
