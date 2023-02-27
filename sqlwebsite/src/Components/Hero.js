import React from 'react'
import videoMP4 from '../Components/Pages/Assets/WebHomeAsset.mp4'
import videoWEBM from '../Components/Pages/Assets/WebHomeAsset.webm'
import Navbar from './Navbar'

function Hero() {
  return (
    <div className='w-full h-full min-h-fit min-w-fit bg-black/75'>
        <Navbar />
        <video className="object-cover w-full h-full absolute -mt-20 -z-10" src={videoMP4} autoPlay loop muted/>
        <div className='flex flex-col justify-center text-center mt-80 text-white'>     
            <h1 className='text-4xl font-bold'>
              Welcome to the Esports Database!
            </h1>
            <p className='text-md text-white pb-16 pt-1.5 mb-96'>A Website By Chase, Karter and Zappa</p>
        </div>
    </div>
  )
}

export default Hero