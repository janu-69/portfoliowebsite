import React from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

const Body = () => {
  const tl=gsap.timeline();

  useGSAP(()=>{
    tl.from("#none",{
      y:100,
      opacity:1,
      duration:0.9,
    })
    tl.from("#one",{
      y:100,
      opacity:1,
      duration:0.9,
    })
    tl.from("#two",{
      y:100,
      opacity:1,
      duration:0.9,
    })
    tl.from("#three",{
      y:100,
      opacity:1,
      duration:0.9,
    })
    tl.from("#four",{
      y:100,
      opacity:0,
      duration:0.9,
    })
  })
  

  return (
    <>

    <div id='body' className='w-full h-[80vh] flex flex-col justify-center items-center leading-normal'>
        
        <div className='overflow-hidden'><h1 id='one' className='font-semibold text-4xl max-sm:text-2xl'>Hello I'm</h1></div>
        <div className='overflow-hidden'><h1 id='two' className='font-bold text-8xl align-top max-sm:text-2xl text-pink-600'>Sangipagi Anil</h1></div>
        <div className='overflow-hidden'><h1 id='three' className='font-semibold text-5xl mt-6 max-sm:text-2xl max-sm:mt-2'>Full Stack Developer</h1></div>

        <div id='four' className='w-10/12 text-lg mt-10 overflow-hidden border-2 border-zinc-400  p-5 rounded-lg max-sm:text-sm'>
          <p>I am passionate FULL STACK DEVELOPER Bringing ideas to life with seamless full-stack development—expertly
           crafting dynamic user experiences with React, scalable backends with Node.js and Express, and robust databases using MongoDB </p>
        </div>
    </div>

    </>
  )
}

export default Body