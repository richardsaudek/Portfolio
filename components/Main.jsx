import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmojiPeople } from "react-icons/md";
import Image from "next/image";
import MainLogo from "../public/assets/main-title.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Main = () => {
  return (
    
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h2 className="py-2 text-[#39339f]">
            My name is{" "}
            <span className="animate-pulse hover:scale-105 ease-in duration-300">
              <Image src={MainLogo} className="mx-auto" alt="/" />
            </span>{" "}
            and I'm a Software Developer.
          </h2>

          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I work with creative people to make responsive web applications.
            Let's collaborate!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-0">
            <a
              href="https://www.linkedin.com/in/richard-saudek/"
              target="_blank"
              rel="noreferrer"
            >
              <div class="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-white relative">
                <span><FaLinkedinIn /></span>
                <span class="opacity-0 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 py-2 px-4 rounded-lg text-sm bg-gray-900 text-white transition-opacity duration-300">LinkedIn Profile</span>
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
            <Link href="https://docs.google.com/document/d/1hj4093sNIe6anS10MmHYVCpxvGzd_pNEOsJ6uKKJw-0/edit?usp=sharing">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              
            </Link>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/#about">
              <div className="  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleDown
                  className="text-[#5651e5]"
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
