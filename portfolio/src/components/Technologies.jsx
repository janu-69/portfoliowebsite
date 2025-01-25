import React, { useEffect } from 'react'; 
import mongodb from "../assets/mongodb.jpg"
import express from "../assets/express.png"
import react from "../assets/react.png"
import node from "../assets/nodejs.png"
import git from "../assets/git.jpeg"
import github from "../assets/github.png"


const Technologies = () => {
  return (
    <>
    <h1 id='technology' className='text-3xl font-bold text-center mt-16'>Technologies</h1>

    <div>
        <div className=' flex justify-around mt-12 flex-auto max-sm:flex-none'>
            <a href='https://www.mongodb.com/docs/?msockid=137f448228786a3c3716518e29ca6b3c'><img id='box' className='h-20 w-20  border-2 hover:scale-110 border-pink-400 rounded-lg overflow-hidden cursor-pointer max-sm:h-10 max-sm:w-10' src={mongodb}></img></a>
            <a href='https://expressjs.com/'><img id='box' className='h-20 w-20 border-2 hover:scale-110 border-pink-400 rounded-lg overflow-hidden cursor-pointer max-sm:h-10 max-sm:w-10' src={express}></img></a>
            <a href='https://react.dev/'><img id='box' className='h-20 w-20 border-2 hover:scale-110 border-pink-400 rounded-lg overflow-hidden cursor-pointer max-sm:h-10 max-sm:w-10' src={react}></img></a>
            <a href="https://nodejs.org/en"><img id='box' className='h-20 w-20 border-2 hover:scale-110 border-pink-400 rounded-lg overflow-hidden cursor-pointer max-sm:h-10 max-sm:w-10' src={node}></img></a>
            <a href='https://git-scm.com/'><img id='box' className='h-20 w-20 border-2 hover:scale-110 border-pink-400 rounded-lg overflow-hidden cursor-pointer max-sm:h-10 max-sm:w-10' src={git}></img></a>
            <a href='https://github.com/'><img id='box' className='h-20 w-20 border-2 hover:scale-110 border-pink-400 rounded-lg overflow-hidden cursor-pointer max-sm:h-10 max-sm:w-10' src={github}></img></a>
        </div>
    </div>
    </>
  )
}

export default Technologies