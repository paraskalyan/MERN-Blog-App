import React from 'react'

const UnHome = () => {
  return (
    <div className='mt-[7vh] p-[30px] flex items-center justify-center flex-col' >
        <h1 className='text-[3rem] font-bold'>Unleash your thoughts on ZINGY.</h1>
        <div className='mt-4'>
            <button className='border-2 border-black px-4 py-1 text-[1.4rem] rounded-full hover:border-green-400 mx-3'>Log in</button>
            <button className='bg-black text-white px-4 py-1 text-[1.4rem] rounded-full hover:ring-2 hover:ring-green-400'>Sign up</button>
        </div>
    </div>
  )
}

export default UnHome