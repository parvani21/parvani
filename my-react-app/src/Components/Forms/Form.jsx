import React from 'react'
import { useState, useEffect } from 'react'
import '../Forms/Form.css'


const Form = () => {
  const initialdata = { name: "", lastname: "", email: "", username: "", password: "", phone: "" }
  const [inputdata, setInputdata] = useState(initialdata)
  const [flag, setFlag] = useState(false)
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (flag) {
      console.log("Registration successfull")
    }
  }, [flag])

  const HandleChange = (e) => {
    setInputdata({
      ...inputdata,
      [e.target.name]: e.target.value
    })
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const { name, lastname, email, username, password, phone } = inputdata
    if (!name || !lastname || !email || !username || !password || !phone) {
      alert("please fill all the field")
      setFlag(false)
      return
    }
    const requestBody = { name, lastname, email, username, password, phone, role: "user" }
    try {
      const response = await fetch("https://shop999backend.vercel.app/back-end/rest-API/Secure/api/v1/auth/Create-User/api1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        }
      )
      const result = await response.json()

      if (result.success) {
        setFlag(true)
        setMessage(result.message)
        setInputdata(initialdata)
        console.log(result)
      }
    } catch (error) {

      console.error("error", error)
      setFlag(false)
      setMessage("something went wrong please try again")

    }
  }
  return (
    <div>
      <div>
        {flag ? (<h2 className='ui-define'>You are registered successfully!</h2>
        ) : (
          <h2 className='ui-define' style={{ color: 'blue' }}>Please fill the form to register.</h2>)}
      </div>
      <form className='Container' onSubmit={HandleSubmit}>
        <div className='header'>
          <h1>Registration Form</h1>
        </div>
        <div>
          <input type='text' placeholder='Enter your name' name='name' value={inputdata.name} onChange={HandleChange} />
        </div>
        <div>
          <input type='text' placeholder='enter last name' name='lastname' value={inputdata.lastname} onChange={HandleChange} />
        </div>
        <div>
          <input type='text' placeholder='Enter email' name='email' value={inputdata.email} onChange={HandleChange} />
        </div>
        <div>
          <input type='text' placeholder='Enter username' name='username' value={inputdata.username} onChange={HandleChange} />
        </div>

        <div>
          <input type='text' placeholder='password' name='password' value={inputdata.password} onChange={HandleChange} />
        </div>

        <div>
          <input type='text' placeholder='Enter phone' name='phone' value={inputdata.phone} onChange={HandleChange} />
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
