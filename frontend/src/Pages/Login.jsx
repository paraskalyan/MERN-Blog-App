import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        axios.post('http://localhost:4000/blog/auth/login', formData)
        .then(response=> console.log(response.data))
        .catch(err=> console.error(err))
    }
  return (  
    <div className='flex items-center justify-center h-[100vh]'>
        <form className='flex flex-col gap-3 w-[400px] items-center text-[14px] py-[50px] px-3 rounded-2xl' onSubmit={handleSubmit}>
            <h1 className='text-[2rem] mb-4'>Login into your account</h1>
            <input onChange={handleChange} value={formData.username} name='username' placeholder='Enter username' type="text"  className=' bg-inherit p-1 text-[1rem] rounded-sm outline-none w-[80%] border-b focus:border-b-2' />
            <input onChange={handleChange} value={formData.password} name='password' placeholder='Enter password' type="text"  className=' bg-inherit p-1 text-[1rem] rounded-sm outline-none w-[80%] border-b focus:border-b-2' />
            <button type='submit' className='bg-slate-800 text-white py-1 px-4 rounded-sm border border-white '>Login</button>
        </form>
    </div>
  )
}

export default Login