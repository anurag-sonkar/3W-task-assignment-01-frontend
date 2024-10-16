import React from 'react'

function AdminLogin() {
    const handleForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const obj = Object.fromEntries(formData.entries())

        const images = formData.getAll('images');
        obj.images = images;

        console.log(obj)
    }
  return (
      <div className='container'>
          <form className='form-container' onSubmit={handleForm}>
              <h1 className='heading'>Admin Login</h1>
              <div className='input-div'>
                  <label htmlFor='name'>username:</label>
                  <input type='text' name='name' id='name' />
              </div>
              <div className='input-div'>
                  <label htmlFor='password'>password:</label>
                  <input type='password' name='password' id='password' />
              </div>

              <button type='submit' className='submit-btn'>Login</button>
          </form>
      </div>
  )
}

export default AdminLogin