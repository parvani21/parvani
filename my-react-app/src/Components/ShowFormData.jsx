import React from 'react'
import { useSelector } from 'react-redux'


const ShowFormData = () => {
    const formData = useSelector((state) => state.form)
    console.log(formData)
  return (
    <div>
      <h2>Submit form data</h2>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.password}</p>
    </div>
  )
}

export default ShowFormData
