import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          As a software developer with a diverse background in digital marketing, the arts, and teaching, I bring a unique perspective to my work. My passion for human-centered design is informed by my experience as a teaching artist in the world of theater, where I learned the importance of empathy and collaboration in creating engaging experiences for diverse audiences. With expertise in React frameworks and a commitment to staying up-to-date with the latest technologies, I am adept at developing functional designs that are both innovative and user-friendly. As a communicator and team player, I value open dialogue and welcome feedback as an opportunity for growth.


          </p>
          <p className='py-2 text-gray-600'>
          With my background in digital marketing, I understand the importance of creating designs that are not only functional but also user-friendly and engaging for diverse audiences. My experience in this field has taught me the importance of data-driven decision-making and the value of testing and iterating to optimize user experience. Drawing on my knowledge of React frameworks and other cutting-edge technologies, I am adept at developing digital solutions that align with business goals and user needs. I’m a team player who values open communication and feedback, recognizing that collaboration is key to achieving successful outcomes.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;