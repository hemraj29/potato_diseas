import React from 'react'
import videoBg from '../assest/b.mp4'
import "../App.css"
const main = () => {
  return (
    <div className='main'>
        <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}

export default main