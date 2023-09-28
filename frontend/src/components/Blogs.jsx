import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blog from './Blog'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBlogs } from '../features/blogSlice';

const Blogs = () => {
    const dispatch = useDispatch()
    const searchQuery = useSelector(state=> state.search.searchQuery)
    console.log(searchQuery)
    const [ data, setData ] = useState(null);
    const [ updated, setUpdated ] = useState();
    function getData(){
        axios.get('http://localhost:4000/blog')
        .then(response=>{
            dispatch(addToBlogs(response.data))
            setData(response.data)
        })
        .catch(error=>console.log(error))
    }

  
     useEffect(()=>{
        getData();
    },[])

    const handleDelete = (deletedId) => {
        // Update the state to remove the deleted blog
        setData(prevData => prevData.filter(blog => blog._id !== deletedId));
    };

    const handleUpdate= ()=>{
        console.log("Handle Update function called")
        getData();
    }

  return (
    <>
        <div className='min-h-[100vh] px-[80px] py-5 w-[70%] '>
            {data && data.map(blog=>{
                const blogUrl = `/blog/${blog._id}`
                return(
                    <Link to={blogUrl} key={blog._id}>
                        <Blog blog={blog} onDelete={handleDelete} onUpdate={handleUpdate}/>
                    </Link>
                    )
                })}
        </div>
        
        
    </>
  )
}

export default Blogs
