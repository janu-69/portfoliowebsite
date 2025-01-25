import React from 'react'; 

const About = () => { 
  return (
    <>
      <div id='about' className='w-full'>
        <h1 id='aboutone' className='w-full flex justify-center items-center font-bold text-3xl'>
          About Me
        </h1>
        <div className='w-full flex justify-center items-center mt-12'>
          <div className='border-2 border-zinc-400 w-11/12 p-5 rounded-xl'>
            <p className='text-center text-xl font-semibold text-green-800'>Education</p>
            <p className='m-2 list-item'>Secondary School Certificate (SSC) </p>
            <p className='m-2 list-item'>Diploma in Electric Electronical Engineering (D.EEE)</p>
            <p className='m-2 list-item'>Bachelor of Technology in Artificial Intelligence (AI)</p>
          </div>
        </div>
        <div className='w-full flex justify-center items-center mt-12'>
          <p className='w-11/12'>
            I am a Dedicated and Versatile Full Stack Developer with a passion for creating efficient and user-friendly web applications. I have learned with a variety of technologies including MongoDB, Express, Node.js, and React. My journey in web development started with a curiosity about how websites function, and over time, I honed my skills in both front-end and back-end development. By leveraging the power of JavaScript across the full stack.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
