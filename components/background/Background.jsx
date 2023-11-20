import React from 'react'

const Background = () => {
  const divStyle = {
    backgroundImage: 'url("gradient-bg.png")',
    backgroundSize: 'cover',
  };
  return (
    <div className='w-screen h-[120vh] sm:h-screen -z-10 absolute top-0 left-0' style={divStyle} />
  )
}

export default Background