import React, { useState } from 'react'
import { user_base_url } from '../utils/base_url'
import { useNavigate } from 'react-router-dom'

function UserForm() {
    const naviagte = useNavigate()
    const [loading , setLoading] = useState(false)
    const handleForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target)
        const obj = Object.fromEntries(formData.entries())

        const socialMediaHandles = formData.get('socialMediaHandles').split(' ')
        
        // console.log(formData)


        try {
            const response = await fetch('http://localhost:8000/user/user-form', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            // console.log('Response:', data);
            // Reset form fields after successful submission
            e.target.reset();
            setLoading(false)
            alert("Attachents Stores Successfully")

            
        } catch (error) {
            setLoading(false)
            console.log(error)
            
        }
        setLoading(false)

    }

    return (
        <div className='container'>
                <button className='admin-btn' onClick={()=>naviagte('/admin-login')} disabled={loading} >Admin Login</button>
            <form className='form-container' onSubmit={handleForm}>
                <h1 className='heading'>User Submission Form</h1>
                <div className='input-div'>
                    <label htmlFor='name'>name:</label>
                    <input type='text' name='name' id='name'  disabled={loading} required />
                </div>
                <div className='input-div'>
                    <label htmlFor='socialMediaHandles'>social media handle:<span className='note'> (If there is more than 1 set, separate them with spaces)</span></label>
                    <input type='text' name='socialMediaHandles' id='socialMediaHandles' disabled={loading} style={loading ? { opacity: "0.3" } : {}} required/>
                </div>
                <div className='input-div'>
                    <label htmlFor='attachments'>upload images:</label>
                    <input type='file' name='attachments' id='attachments' multiple disabled={loading} style={loading ? { opacity: "0.3" } : {}} required
 />
                </div>

                <button type='submit' className='submit-btn' disabled={loading} >Submit</button>
            {
                loading && <div className='grid justify-center font-bold text-2xl '>loading...</div>
            }
            </form>
        </div>
    )
}

export default UserForm