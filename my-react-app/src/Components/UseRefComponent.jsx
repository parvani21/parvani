import React from 'react'
import { useState, useRef } from 'react'

const UseRefComponent = () => {
   const [name, setName] = useState("")
   const refelement = useRef("")
   console.log(refelement)
   const HandleChange = () => {
      setName("")
      refelement.current.focus()
    }
   const HandleChangeColor = ()=>{
    refelement.current.style.color = "red"
   }
  return (
    <div>
      <h1>Learn UseRef</h1>
      <input ref = {refelement} type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={HandleChange}>reset</button>
      <button onClick={HandleChangeColor}>change color</button>
    </div>
  )
}

export default UseRefComponent
