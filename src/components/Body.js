import React from 'react'
import VideoContainer from './VideoContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar></Sidebar>
      <VideoContainer></VideoContainer>
    </div>
  )
}

export default Body
