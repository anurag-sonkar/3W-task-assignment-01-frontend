import React from 'react'
import { user_base_url } from '../utils/base_url'

function UserForm() {

    const handleForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const obj = Object.fromEntries(formData.entries())

        const socialMediaHandles = formData.get('socialMediaHandles').split(' ')
        
        console.log(formData)

        try {
            const response = await fetch('http://localhost:8000/user/user-form', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log('Response:', data);

        } catch (error) {
            console.log(error)

        }

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
                    <label htmlFor='socialMediaHandles'>social media handle:<span className='note'> (If there is more than 1 set, separate them with spaces)</span></label>
                    <input type='text' name='socialMediaHandles' id='socialMediaHandles' />
                </div>
                <div className='input-div'>
                    <label htmlFor='attachments'>upload images:</label>
                    <input type='file' name='attachments' id='attachments' multiple />
                </div>

                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm