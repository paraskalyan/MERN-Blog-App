import React, { useState } from 'react'
import axios from 'axios';

const UpdateBlog = (props) => {
    const id = props.blog.blog._id;
    const [formData, setFormData] = useState({
        title: props.blog.blog.title,
        content: props.blog.blog.content,
        author: props.blog.blog.author
        });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        axios.put(`http://localhost:4000/blog/update/${id}`, formData)
        .then(response=>{
            console.log(response)
            props.onUpdate()
        })
        .catch(error=>console.error(error))
    }
  return (
    <div className='transition-all' >
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-1 text-black'>
            <input className='w-[70%] border p-1 outline-none rounded-sm' name='title' onChange={handleInputChange} value={formData.title} type="text" />
            <textarea className='w-[70%] border p-1 outline-none rounded-sm' rows='5' name='content' onChange={handleInputChange} value={formData.content} type='text'/>
            <input className='w-[70%] border p-1 outline-none rounded-sm' name='author' onChange={handleInputChange} value={formData.author} type="text" />
            <button className='bg-green-700 px-4 py-1 text-white' type='submit'> DONE</button>
        </form>
    </div>
  )
}

export default UpdateBlog