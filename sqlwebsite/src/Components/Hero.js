import React from 'react'
import videoMP4 from '../Components/Pages/Assets/WebHomeAsset.mp4'
import videoWEBM from '../Components/Pages/Assets/WebHomeAsset.webm'
import Navbar from './Navbar'

function Hero() {
  return (
    <div className='m-0'>
        <video className="" src={videoMP4} autoPlay loop muted/>
    </div>
  )
}

// Tutorial: https://youtu.be/LSRNmhLS76o

export default Hero