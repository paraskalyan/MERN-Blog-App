import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Blog from '../components/Blog';
import Blogs from '../components/Blogs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Profile = () => {
  const { id } = useParams();
  const user = useSelector(state=> state.user.user)
  console.log("asdakkkkkkkkkk",user)
  const [ blogs, setBlogs ] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:4000/user/blog/${id}`)
        .then(res=>{console.log(res); setBlogs(res.data)})
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='mt-[7vh] mx-[20%] py-[40px] h-auto flex flex-col items-center justify-center '>
      <div className='flex items-center py-5 rounded-full w-[70%] justify-center shadow-md'>
        <div className='border-2 border-black h-[70px] w-[70px] rounded-full '></div>
        <div className='flex gap-5 ml-8'>
          {user && 
          <>
          <div className=''>{user.username}</div>
          <div className=''>{user.followers.length} followers</div>
          <div className=''>{user.following.length} following</div>
          </>
          }
        </div>
      </div>
      <div className='my-4 w-full'>
        <h1 className='text-[2rem]'>Your posts</h1>
        <div className=''>
          {blogs && blogs.map(blog=>
          <div className='cursor-pointer p-4 rounded-md shadow-md hover:shadow-xl group relative'>
            <div className='absolute right-0 p-3'>
              <button className='invisible group-hover:visible bg-black rounded-full text-white p-1 mx-1'><EditIcon/></button>
              <button className='invisible group-hover:visible bg-black rounded-full text-white p-1'><DeleteIcon/></button>
            </div>
            <h1>{blog.title}</h1>
            <h2>{blog.content}</h2>
          </div>
            )}
        </div>
      </div>

    </div>
  )
}

export default Profile
