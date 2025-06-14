import React from 'react'
import { useState } from 'react'
const UseStateHook = () => {
    const [counter,SetCounter] = useState(0)
    const HandleClick = () => {
        SetCounter(counter+5)
    }
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={HandleClick}>Increase</button>
    </div>
  )
}

export default UseStateHook
