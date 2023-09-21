import React, { useState } from 'react'
import axios from 'axios';
const AddBlog = () => {

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleForm = (e) => {
    e.preventDefault()
    console.log(formData);
    axios.post('http://localhost:4000/blog/save', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))

  }
  return (
    <div className='flex bg-black items-center justify-center p-4'>
      <form className='flex flex-col gap-1 w-[50%] justify-center items-center' onSubmit={handleForm}>
        <input className='border border-green-500 outline-none w-[50%] p-1' name='title' onChange={handleInputChange} value={formData.title} placeholder='Enter title' type="text" />
        <textarea className='border border-green-500 outline-none w-[50%] p-1' rows='4' name='content' onChange={handleInputChange} value={formData.content} placeholder='Enter content' type="text" />
        <input className='border border-green-500 outline-none w-[50%] p-1' name='author' onChange={handleInputChange} value={formData.author} placeholder='Enter author name' type="text" />
        <button className='px-6 py-1 border text-green-500 border-green-500 hover:bg-green-400 ' type='submit'>Save</button>
      </form>
    </div>  
  )
}

export default AddBlog