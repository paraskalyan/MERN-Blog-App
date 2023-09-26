import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const BlogPage = () => {
    const { id } = useParams()
    const [ data, setData ] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:4000/blog/${id}`)
        .then(response=>
            {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error=>console.log(error))
    },[])

    const handleFollow = ()=>{
        axios.put('http://localhost:4000/user/follow', {followId: data.userId, userId: localStorage.getItem('userId')})
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))
    }

    return (
        <div className='mt-[7vh] px-[20%] py-10 '>
            {data &&
            <>
            <div className='px-10'>
                <h1 className='text-[2.3rem] font-bold'>{data.title}</h1>
                <div className='flex gap-5 my-8 items-center'>
                    <img src='d' />
                    <div className='flex flex-col'>
                        <div className='flex gap-3'>
                            <p>{data.userId}</p>
                            <button onClick={handleFollow} className='text-green-700'>Follow</button>
                        </div>
                        <div className='flex gap-3 text-gray-500 text-[14px]'>
                            <p>7 min read</p>
                            <p> Apr 6</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='p-10'>
                <div><img src={data.image ? `http://localhost:4000/public/uploads/${data.image}` :'https://miro.medium.com/v2/resize:fit:720/format:webp/1*lwC3kuV2jbtMLV7QIcfHoA.png'}/></div>
                <div className='mt-10 text-justify'>
                    {data.content}
                </div>
            </div>
            </>
        }
        </div>
    )
}

export default BlogPage
