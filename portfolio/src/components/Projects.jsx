import React from 'react'; 

const Projects = () => {
    const handlefirst=()=>{
        window.open('https://github.com/janu-69/Taskmgmt.git');
    }
    const handlesecond=()=>{
        window.open('https://github.com/janu-69/ecommerce-application.git');
    }
  
  return (
    <>
    <h1 id='projects' className='text-center mt-16'>Browse My Recent </h1>
    <h1 id='headingproject' className='text-3xl font-bold text-center mt-3'>Projects</h1>
    <div className='w-full flex justify-center items-center mt-12'>
    <div className='w-11/12 border-2 border-zinc-400 rounded-md'>
        <h1 className='text-center p-1 font-semibold'>Task Management</h1>
        <p className='p-2'>An application for managing tasks and projects with features
             such as task creation by leader, assigning task to their team members and progress tracking.
              Team members can mark as completed or failed the task</p>
              <div className='p-2 w-full flex justify-center items-center'><button className='bg-pink-400 rounded-md px-2' onClick={handlefirst}>Visit Once..</button></div>
    </div>
    </div>

    <div className='w-full flex justify-center items-center mt-12'>
    <div className='w-11/12 border-2 border-zinc-400 rounded-md'>
        <h1 className='text-center p-1 font-semibold'>E-Commerce website</h1>
        <p className='p-2'>A fully functional eCommerce website built to allow users to browse, search, and purchase products online. The platform offers a seamless shopping experience with key features such as a product catalog, user authentication, shopping cart, order management.</p>
             <div className='p-2 w-full flex justify-center items-center'><button className='bg-pink-400 rounded-md px-2' onClick={handlesecond}>Visit Once..</button></div>
    </div>
    </div>
    </>
  )
}

export default Projects