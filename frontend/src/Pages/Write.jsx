import React, { useState } from 'react'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Write = ({isAuth}) => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    title: '',
    content: '',
    category: '',
  });

  const [img, setImg] = useState()


  const handleChange = ((e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormInputs((prev) => ({
      ...prev,
      [name]: value
    }))
  })
  const handleImageChange = (e) => {
    const img = e.target.files[0];
    setImg(img)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', img)
    formData.append('title', formInputs.title)
    formData.append('content', formInputs.content)
    formData.append('category', formInputs.category)
    formData.append('userId', localStorage.getItem('userId'))
    console.log(formData)
  
    axios.post('http://localhost:4000/blog/save', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))

  }

  return (
    <div className='h-full px-[20%] py-[40px] flex flex-col'>
      <div className='flex justify-between items-center  px-2'>
        <h1 className='text-[2.5rem]'>Write your story</h1><hr></hr>
        
      </div>
      <hr/>
      <form className='my-5 flex flex-col' onSubmit={handleSubmit} encType="multipart/form-data">
        <input onChange={handleChange} value={formInputs.title} type='text' placeholder='Title' name='title' className='outline-none   w-full h-[80px] text-[2rem] p-4 focus:border-l-2' />
        <textarea onChange={handleChange} value={formInputs.content} rows='6' placeholder='Tell your story... ' name='content' className='outline-none  w-full text-[1.3rem] p-4 my-2 focus:border-l-2' />
        <input onChange={handleChange} value={formInputs.category} type='text' placeholder='Category' name='category' className='outline-none w-full p-4 focus:border-l-2' />
        <div className=' flex flex-col mx-4'>
          <label htmlFor='fileInput' className=''>Upload image <ImageOutlinedIcon style={{ color: 'gray' }} /></label>
          <input onChange={handleImageChange} name='image' className='text-[14px] text-gray-400' type='file' />
        </div>
        <hr />
        <button
          type='submit'
          className='bg-green-700 text-white px-[40px] w-fit py-1 rounded-full  hover:bg-transparent border border-green-700 hover:text-green-700 transition '>
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write;
