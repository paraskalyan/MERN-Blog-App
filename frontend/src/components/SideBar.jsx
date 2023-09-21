import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const SideBar = () => {
    const topics = ['Programming','Data Science','Technology','Self Improvement','Writing','Relationships','Machine Learning']
  return (
    <div className='h-[100vh] fixed w-[30%] right-0 px-[30px] py-10  border-l '>
        <div >
            <h6 className='font-semibold'>Recommended topics</h6>
            <div className='flex flex-wrap gap-4 my-4'>
                {topics.map((item, index)=>{
                    return(
                    <div key={index} className='text-[14px] bg-[#e8e8e8] px-3 py-1 rounded-xl cursor-pointer'>{item}</div>
                    )
                })}
            </div>
        </div>
        <div className='my-8'>
            <h6 className='font-semibold'>Reading list</h6>
            <div className='text-[14px] mt-2'>Click the <BookmarkBorderIcon style={{fontSize: '18px'}}/>  on any story to easily add it to your reading list or a custom list that you can share.</div>
        </div>
    </div>
  )
}

export default SideBar