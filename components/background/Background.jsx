import React from 'react'

const Background = () => {
  return (
    <div className='w-screen h-screen -z-10 absolute top-0 left-0'>
        <img className='w-full h-full' src="/gradient-bg.png" alt="background" />
    </div>
  )
}

export default Background