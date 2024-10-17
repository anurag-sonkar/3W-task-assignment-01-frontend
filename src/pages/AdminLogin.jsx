import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// handling only with frontend - as auth is not done at backend , focusing on main fucntionality that is showing user responses with there attachments
function AdminLogin() {
    const naigate = useNavigate()
    const [formData , setFormData] = useState({
        name : "Anurag",
        password : "12345600088800"

    })

    const handleChange = (e)=>{
        setFormData({
            ...formData , [e.target.name] : e.target.value
        })
    }

    console.log(formData)
    const handleForm = (e) => {
        e.preventDefault()
        

        if(formData.name !== '' && formData.password !== ''){
            naigate('/admin-dashboard')
        }else{
            alert('name & password required to login')
            return
        }
    }
  return (
      <div className='container'>
          <form className='form-container' onSubmit={handleForm}>
              <h1 className='heading'>Admin Login</h1>
              <div className='input-div'>
                  <label htmlFor='name'>username:</label>
                  <input type='text' name='name' id='name' value={formData.name}  onChange={handleChange}/>
              </div>
              <div className='input-div'>
                  <label htmlFor='password'>password:</label>
                  <input type='password' name='password' id='password' value={formData.password} onChange={handleChange}/>
              </div>

              <button type='submit' className='submit-btn'>Login</button>
          </form>
      </div>
  )
}

export default AdminLogin