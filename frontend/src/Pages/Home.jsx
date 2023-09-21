import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blogs from '../components/Blogs';
import AddBlog from '../components/AddBlog';
import SideBar from '../components/SideBar';
const Home = () => {
    
  return (
    <div className='flex gap-1 h-full mt-[7vh]'>
        {/* <AddBlog/> */}
        <Blogs/>
        <SideBar/>
    </div>
  )
}

export default Home