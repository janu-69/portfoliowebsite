import React from 'react'; 
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import resume from "../assets/AnilResume.pdf"

const Contact = () => {
  return (
    <>
      <div id='contact'>
        <h1 className="text-center mt-16 text-lg font-semibold text-zinc-600">Get in Touch</h1>
        <h1 id='contactme' className="text-center max-sm:mt-5 max-md:mt-5 mt-8 max-sm:text-3xl text-5xl font-bold">Contact Me</h1>
        <div className="w-full flex justify-center items-center mt-8">
        <a href="mailto:sangapagi@gmail.com" className="max-sm:w-10/12  px-2 text-center border-2 border-pink-500 rounded-lg font-semibold text-lg cursor-pointer">
  Sangapagi@gmail.com
</a>
        </div>
        <div className="flex justify-center items-center mt-8">
        <a href={resume} download="AnilResume.pdf">
                    <button className="bg-pink-400 rounded-md px-2">Download Resume</button>
                  </a>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <a className='hover:scale-125' href="https://www.facebook.com/anil.sangipagi?mibextid=ZbWKwL">
            <FaFacebook size={30} color="#3b5998" />
          </a>
          <a className='hover:scale-125' href="https://www.linkedin.com/in/anil-sangipagi-32a22225b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
            <FaLinkedin size={30} color="#0077b5" />
          </a>
          <a className='hover:scale-125' href="https://www.instagram.com/invites/contact/?igsh=1tknc75c9db0m&utm_content=2yg8qjm" >
            <FaInstagram size={30} color="#E4405F" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
