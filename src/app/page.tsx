import React from 'react'
import IconMenu from './(HomePageComponents)/IconMenu'
import AboutButton from './(HomePageComponents)/AboutButton'
import HeroSection from './(HomePageComponents)/HeroSection'
import ToolKit from './(HomePageComponents)/ToolKit'

const Home = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-custom-blue font-rowdies pl-24 mt-16 text-5xl'>
          SKRPTZ CODE
        </div>
        <div className='mt-16 mx-24'>
          <AboutButton />
        </div>
      </div>
      <div className='absolute top-1/3 ml-16'>
        <IconMenu />
      </div>
      <div className='mx-auto mt-32'>
        <HeroSection />
      </div>
      <div>
        <ToolKit />
      </div>
    </div>
  )
}

export default Home


