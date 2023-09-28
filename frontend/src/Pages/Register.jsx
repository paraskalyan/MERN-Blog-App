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
        axios.post('http://localhost:4000/auth/register', formData)
        .then(response=>{
            console.log(response);
        })
        .catch(err=> console.error(err))

    }
  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
        <h1 className='text-[2rem] mb-4'>Sign up</h1>
        <form className='flex flex-col gap-4 w-[400px] items-center text-[14px]' onSubmit={handleSubmit}>
            <input name='username' onChange={handleChange} value={formData.username} className=' bg-inherit p-1 text-[1rem] rounded-sm outline-none w-[80%] border-b focus:border-b-2' placeholder='Enter username' type="text" />
            <input name='email' onChange={handleChange} value={formData.email} className=' bg-inherit p-1 text-[1rem] rounded-sm outline-none w-[80%] border-b focus:border-b-2' placeholder='Enter email' type="text" />
            <input name='password' onChange={handleChange} value={formData.password} className=' bg-inherit p-1 text-[1rem] rounded-sm outline-none w-[80%] border-b focus:border-b-2' placeholder='Enter password' type="password" />
            <button type='submit' className='bg-slate-800 text-white py-1 px-4 rounded-sm hover:bg-slate-900' >Register</button>
        </form>
    </div>
  )
}

export default Register
