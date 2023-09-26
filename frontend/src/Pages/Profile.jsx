import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:4000/user/blog/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='mt-[7vh]'>
        <div contentEditable >
             sdsadad
        </div>
    </div>
  )
}

export default Profile
