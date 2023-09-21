import React from 'react'
import logo from '../images/logo-zingy.png'
import SearchIcon from '@mui/icons-material/Search';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='h-[7vh] fixed top-0 bg-white w-full flex items-center justify-between p-5 shadow-md '>
            <div className='flex gap-9 items-center'>
                <div className=''><Link to='/'><img src={logo} height="80px" width="80px"/></Link></div>
                <div className='border border-[#f0f0f0] px-2'><input className='outline-none text-[14px]' type='text'/><SearchIcon style={{fontSize: '18px'}}/></div>
            </div>
            <div className='flex gap-6 items-center text-[15px]'>
                <div><EditNoteIcon/><Link to='/write'>Write</Link></div>
                <div><Link to='/register'>Sign up</Link></div>
                <div><Link to='/login'>Log in</Link></div>
            </div>
        </div>
    )
}

export default Navbar