import React, { useState } from 'react';
import { FaAlignJustify, FaArrowLeft } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div id="list" className={`h-screen w-full bg-pink-200 text-center max-2xl:hidden p-10 absolute z-20 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'max-2xl:hidden block' : 'hidden'}`} ref={(el) => {if (el && isSidebarOpen) {el.scrollIntoView({ behavior: 'smooth' });}}}>
        <a href="#about" onClick={closeSidebar}><h1 className="mt-5 text-2xl font-bold">About Me</h1></a>
        <a href="#technology" onClick={closeSidebar}><h1 className="mt-5 text-2xl font-bold">Technologies</h1></a>
        <a href="#projects" onClick={closeSidebar}><h1 className="mt-5 text-2xl font-bold">My Work</h1></a>
        <a href="#contact" onClick={closeSidebar}><h1 className="mt-5 text-2xl font-bold">Contact Me</h1></a>
        <h1
          className="text-center mt-10 font-bold text-xl flex gap-2 justify-center items-center cursor-pointer"
          onClick={closeSidebar}
        >
          <FaArrowLeft />Back
        </h1>
      </div>

      <div id="header" className="flex p-10 justify-between text-xl max-sm:text-base max-sm:p-5 font-semibold">
        <h1 className="text-pink-700 cursor-pointer">ANIL.</h1>

        <div className="flex gap-10 max-sm:gap-4">
          <a href="#about" onClick={closeSidebar}><h1 className="cursor-pointer hover:scale-110 max-sm:hidden">About</h1></a>
          <a href="#technology" onClick={closeSidebar}><h1 className="cursor-pointer hover:scale-110 max-sm:hidden">Technologies</h1></a>
          <a href="#projects" onClick={closeSidebar}><h1 className="cursor-pointer hover:scale-110 max-sm:hidden">My Work</h1></a>
          <a href="#contact" onClick={closeSidebar}><h1 className="cursor-pointer hover:scale-110 max-sm:hidden">Contact</h1></a>

          <div className="max-2xl:hidden max-sm:block max-md:hidden">
            <FaAlignJustify onClick={toggleSidebar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
