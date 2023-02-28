import React from 'react'
import videoMP4 from '../Components/Pages/Assets/WebHomeAsset.mp4'
import videoWEBM from '../Components/Pages/Assets/WebHomeAsset.webm'


function Hero() {
  return (
    <div className='w-full h-screen'>
        <video className="w-full h-full object-cover" src={videoMP4} autoPlay loop muted/>
        <div className='absolute top-[40vh] w-full text-center'>
          <h1 className='text-white text-3xl font-bold'>
            Welcome to the Esports Database
          </h1>
          <p className='text-white text-xl'>
            You can edit the database easily from this website
          </p>
        </div>
    </div>
  )
}

// Tutorial: https://youtu.be/LSRNmhLS76o

export default Hero