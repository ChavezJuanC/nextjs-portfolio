import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='inline-block mr-16'>
        <p className='text-white font-semibold text-3xl'>
          "Empowering with Full Stack Web Dev <br />
          & AI Solutions"
        </p>
        <div className='pt-4'>
          <button className='border-2 border-white text-black bg-white text-lg font-semibold px-1 rounded-md shadow-md'>
            Contact
          </button>
        </div>
      </div>
      <div className='inline-block h-96 w-80 bg-cover bg-center rounded-full' style={{ backgroundImage: `url('me.png')` }}>
      </div>
    </div>
  );

}

export default HeroSection
