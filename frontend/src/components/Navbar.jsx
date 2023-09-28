import React, { useState } from 'react'
import logo from '../images/logo-zingy.png'
import SearchIcon from '@mui/icons-material/Search';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from '../features/authSlice';
import { setSearchQuery } from '../features/searchQuery';
const Navbar = () => {
    const blogs = useSelector(state=> state.blogs.blogs)
    console.log(blogs)
    const isAuth = useSelector(state=> state.auth.isAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearchChange = (e)=>{
        dispatch(setSearchQuery(e.target.value))

    }
    const handleLogout = ()=>{
        localStorage.clear()
        dispatch(changeAuth(false))
    } 
    
    const openProfile = ()=>{
        navigate(`/user/${localStorage.getItem('userId')}`)
    }
    if(isAuth){
        return(
            <div className='h-[7vh] fixed top-0 bg-white w-full flex items-center justify-between p-5 shadow-md '>
            <div className='flex gap-9 items-center'>
                <div className=''><Link to='/'><img src={logo} height="80px" width="80px"/></Link></div>
                <div className='border border-[#f0f0f0] px-2'><input className='outline-none text-[14px]' onChange={handleSearchChange} type='text'/><SearchIcon style={{fontSize: '18px'}}/></div>
            </div>
            <div className='flex gap-6 items-center text-[15px]'>
                <div><EditNoteIcon/><Link to='/write'>Write</Link></div>
                <div>Hi,  {localStorage.getItem('username')}</div>
                <div><Link onClick={handleLogout} to='/'>Log out</Link></div>
                <div className='h-[30px] w-[30px] rounded-full border border-black' onClick={openProfile}></div>
            </div>
        </div>
        )
    }
    else{

    
    return (
        <div className='h-[7vh] fixed top-0 bg-white w-full flex items-center justify-between p-5 shadow-md '>
            <div className='flex gap-9 items-center'>
                <div className=''><Link to='/'><img src={logo} height="80px" width="80px"/></Link></div>
                <div className='border border-[#f0f0f0] px-2'><input className='outline-none text-[14px]' onChange={handleSearchChange} type='text'/><SearchIcon style={{fontSize: '18px'}}/></div>
            </div>
            <div className='flex gap-6 items-center text-[15px]'>
                <div><EditNoteIcon/><Link to='/login'>Write</Link></div>
                <div><Link to='/register'>Sign up</Link></div>
                <div><Link to='/login'>Log in</Link></div>
            </div>
        </div>
    )
    }
    
}

export default Navbar
