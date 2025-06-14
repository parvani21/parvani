import React from 'react'
import { useState } from 'react'

const EyesComponent = () => {

    const [ShowPassword, setShowPassword] =useState(false)
     const togglePasswordVisibility =() => {
       setShowPassword((prev)=>!prev)
     }
  return (
    <div>
    <div className='InputGroup'>
        <h4>Last Name</h4>
        <input type={ShowPassword?"text" : 'password'} placeholder='Last Name' />
        <button type='buttton' onClick={togglePasswordVisibility}>{ShowPassword?"hide":"show"}</button>
    </div>
    </div>
  )
}

export default EyesComponent
 