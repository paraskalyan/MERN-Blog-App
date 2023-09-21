import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name] : value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/blog/auth/register', formData)
        .then(response=>{
            console.log(response);
        })
        .catch(err=> console.error(err))

    }
  return (
    <div className='flex items-center justify-center bg-slate-500 h-[100vh]'>
        <form className='flex flex-col gap-2 w-[400px] items-center text-[14px]' onSubmit={handleSubmit}>
            <input name='username' onChange={handleChange} value={formData.username} className='p-1 rounded-sm outline-none w-[80%]' placeholder='Enter username' type="text" />
            <input name='email' onChange={handleChange} value={formData.email} className='p-1 rounded-sm outline-none w-[80%]' placeholder='Enter email' type="text" />
            <input name='password' onChange={handleChange} value={formData.password} className='p-1 rounded-sm outline-none w-[80%]' placeholder='Enter password' type="password" />
            <button type='submit' className='bg-slate-800 text-white py-1 px-4 rounded-sm hover:bg-slate-900' >Register</button>
        </form>
    </div>
  )
}

export default Register