import axios from 'axios';
import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import counter, { decrement, increment } from '../features/counter';
import { changeAuth } from '../features/authSlice';
import { addUser, currentUser } from '../features/userSlice';
const Login = ({setAuth}) => {
    const counterVal = useSelector(state=> state.count)
    const authState = useSelector(state=> state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        username: '',
        password: '',
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
        axios.post('http://localhost:4000/auth/login', formData)
        .then(response=>{
            console.log(response.data.token)
            console.log(response.data)
            if (response.status === 200){
                dispatch(changeAuth(true))
                dispatch(addUser(response.data.userData))
                // fetchUserBlogs();
            }
            
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userId", response.data.userId)
            localStorage.setItem("username", response.data.username)
            // setAuth(true)
            navigate('/')
        }
             )
        .catch(err=> console.error(err))
    }
    const fetchUserBlogs = ()=>{

    }
  return (  
    <div className='flex items-center justify-center h-[100vh]'>
        <form className='flex flex-col gap-3 w-[400px] items-center text-[14px] py-[50px] px-3 rounded-2xl' onSubmit={handleSubmit}>
            <h1 className='text-[2rem] mb-4'>Login into your account</h1>
            <input onChange={handleChange} value={formData.username} name='username' placeholder='Enter username' type="text"  className=' bg-inherit p-1 text-[1rem] rounded-sm outline-none w-[80%] border-b focus:border-b-2' />
            <input onChange={handleChange} value={formData.password} name='password' placeholder='Enter password' type="text"  className=' bg-inherit p-1 text-[1rem] rounded-sm outline-none w-[80%] border-b focus:border-b-2' />
            <button type='submit' className='bg-slate-800 text-white py-1 px-4 rounded-sm border border-white '>Login</button>
        </form>

        <span>{counterVal.value}</span>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Login
