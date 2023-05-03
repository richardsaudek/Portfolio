import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmojiPeople } from "react-icons/md";
import Image from "next/image";
import MainLogo from "../public/assets/main title.png";
import Headshot from "../public/assets/headshot hoodie.png";
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';



const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <p className="uppercase text-sm tracking-widest text-[#7e71fd]">
            hello! my name is
          </p> */}

          <h2 className="py-2 text-gray-700">My name is <span className="animate-pulse hover:scale-105 ease-in duration-300"><Image src={MainLogo} className="mx-auto" alt="/" /></span> and I'm a Software Developer.</h2>

          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I work with creative people to make responsive web applications. Let's collaborate!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-0">
            <a
              href="https://www.linkedin.com/in/richard-saudek/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/richardsaudek"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
            
                </div>
            <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleDown
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>


       
  


          
        </div>
      </div>
    </div>
    
  );
};

export default Main;
