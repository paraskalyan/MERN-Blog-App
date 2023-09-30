import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserFollowing = () => {
    const user = useSelector(state => state.user.user)
    console.log(user.following)
    // var followers = []
    // const fetchUser =async (id)=> {
    //     await axios.get(`http://localhost:4000/user/${id}`)
    //     .then(res=>{
    //         followers.push(res.data)
    //     })
    //     .catch(err=> console.log(err))

    // }
    // for (var id in user.followers){
    //     fetchUser(user.followers[id])
    // }
    // console.log(followers)

    return (
        <div className='mt-[7vh] mx-[30%] py-[40px] flex flex-col items-center bg-[#FAFAFA] h-[93vh] shadow-md'>
            {user.following.length === 0 && <h1 className='text-[2rem]'>You are not following anyone!</h1>}
            {user.following.map(f => {
                return (
                    <div className='border-b border-t w-full px-2 h-[50px] flex items-center justify-between  cursor-pointer hover:bg-slate-200'>
                       <Link to={`/user/${f}`}>
                        <div className='flex items-center gap-2'>
                            <div className='h-[40px] w-[40px] border border-black rounded-full'></div>
                            <p>{f}</p>
                        </div>
                       </Link> 
                        <div>

                        {
                            user.followers.map(fo => {
                                return fo === f ? <p className=''>Follows you</p> : ''
                            })
                        }
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default UserFollowing