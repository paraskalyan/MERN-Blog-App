import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AddBlog from './AddBlog';
import UpdateBlog from './UpdateBlog';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const Blog = (props) => {
  const [data, setData] = useState(props);
  const [id, setId] = useState();
  const [updateComp, showUpdateComp] = useState(false);

  const slicedContent = props.blog.content.slice(0, 180);

  const dateObject = new Date(props.blog.created);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);


  const deleteblog = () => {
    setId(props.blog._id)
    axios.delete(`http://localhost:4000/blog/delete/${id}`)
      .then(response => {
        console.log(response)
        props.onDelete(props.blog._id)
      })
      .catch(error => console.error(error))

  }

  const handleUpdate = () => {
    console.log("Blog Updated")
    props.onUpdate()
  }


  return (
    <div className='w-full my-4 p-5 flex'>
      <div className='flex-[2]'>
        <div className='flex gap-1 text-[14px]'>
          <img src='k' />
          <p>{props.blog.author}.</p>
          <p>{formattedDate}</p>
        </div>
        <div>
          <h1 className='font-bold text-[1.3rem]'>{props.blog.title}</h1>
          <p className='my-2 text-justify font-[bitter]'>{slicedContent}...</p>
          <p className='italic text-[14px] font-bold'></p>
        </div>
        <div className='flex gap-3 text-[14px] my-8 justify-between'>
          <div className='flex gap-4'>
            <p className='bg-[#e8e8e8] px-3 rounded-xl'>Programming</p>
            <p className='text-gray-700'>6 min read</p>
          </div>
          <div>
            <div><BookmarkBorderIcon style={{color: '#878787', fontSize:'22px'}} /></div>
          </div>
        </div>
        {/* <div className='my-3'>
        <button className=' mx-2 px-5 py-1' onClick={()=>showUpdateComp(!updateComp)}>Update</button>
        <button className=' px-5 py-1' onClick={deleteblog}>Delete</button>
      </div> 
      {updateComp && <UpdateBlog blog = {props} onUpdate = {handleUpdate}/>} */}
      </div>
      <div className='flex-[1]  flex items-center justify-center'>
        <img className='rounded-md' height='150px' width="150px" src={props.blog.image? `http://localhost:4000/public/uploads/${props.blog.image}`:'https://blog.eduonix.com/wp-content/uploads/2018/09/Scientific-Python-Scipy.jpg'} />
      </div>
    </div>
  )
}

export default Blog