import React from 'react'
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa"
import { RiContactsBook3Line } from "react-icons/ri";


const IconMenu = () => {
  return (
    <div>
      <ul>
        <li><div className='p-3'><FaLinkedin className='text-4xl text-white hover:text-5xl active:animate-ping transition-transform hover:cursor-pointer' /></div></li>
        <li><div className='p-3'><FaDiscord className='text-4xl text-white hover:text-5xl active:animate-ping transition-transform hover:cursor-pointer' /></div></li>
        <li><div className='p-3'><FaGithub className='text-4xl text-white hover:text-5xl active:animate-ping transition-transform hover:cursor-pointer' /></div></li>
        <li><div className='p-3'><RiContactsBook3Line className='text-4xl text-white hover:text-5xl active:animate-ping transition-transform hover:cursor-pointer' /></div></li>
      </ul>
    </div>
  )
}

export default IconMenu
