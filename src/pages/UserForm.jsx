import React from 'react'

function UserForm() {

    const handleForm = (e)=>{
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
              <h1 className='heading'>User Submission Form</h1>
              <div className='input-div'>
                  <label htmlFor='name'>name:</label>
                  <input type='text' name='name' id='name' />
              </div>
              <div className='input-div'>
                  <label htmlFor='social-media'>social media handle:</label>
                  <input type='text' name='social-media' id='social-media' />
              </div>
              <div className='input-div'>
                  <label htmlFor='images'>upload images:</label>
                  <input type='file' name='images' id='images' multiple/>
              </div>

              <button type='submit' className='submit-btn'>Submit</button>
          </form>
    </div>
  )
}

export default UserForm