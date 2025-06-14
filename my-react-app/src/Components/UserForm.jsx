import React from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import {updateFill, resetForm} from '../Redux/FormSlice'


const UserForm = () => {
    const Dispatch = useDispatch()
    const formData = useSelector((state) => state.form)
    
    const HandleChange = (e) => {
       const {name, value} = e.target 
       Dispatch(updateFill({field: name, value}))
    }
     const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        Dispatch(resetForm())
     }
    
  return (
     

          <form onSubmit={HandleSubmit}>
            <label >name</label>
            <input type='text' placeholder='name' name='name' value={formData.name} onChange={HandleChange}/><br/>
            <label>email</label>
            <input type='text'placeholder='email' name='email' value={formData.email} onChange={HandleChange}/><br/>
            <label>password</label>
            <input type='password' placeholder='password' name='password' value={formData.password} onChange={HandleChange}/><br/>
            <button type='submit'>submit</button>
          </form>
        
        
  )
}

export default UserForm
