import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aslImg from '../public/assets/projects/ASL Project Image.jpg';
import bookitImg from '../public/assets/projects/BookiT Image.png'
import peruzImg from '../public/assets/projects/Peruz Revuz Image.png'
import frankenImg from '../public/assets/projects/FrankenStory Image.png'
import moochachaImg from '../public/assets/projects/MooChaCha Image.png'
import ProjectItem from './ProjectItem';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import Html  from '../public/assets/skills/html.png';



const Projects = () => {
  return (

    
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>

          <ProjectItem
            title='ASL'
            backgroundImg={aslImg}
            projectUrl='https://asl-front-git-dev-donkeykong718.vercel.app/'
            tech='Next.js, React, Django, Python, PostgreSQL.'
            githubUrl='https://github.com/richardsaudek/ASL-Front'
            />
            
            
            <p className='p-8 text-justify tracking-widest  '> 
                A clone of AOL chat rooms, perfectly recreating retro sounds and styles from 1998.</p>
          </div>

          <div>

          <ProjectItem
            title='Book It'
            backgroundImg={bookitImg}
            projectUrl='https://booked-it.vercel.app/'
            tech='JavaScript, JSON API, Express, Mongoose'
            githubUrl='https://github.com/richardsaudek/Booked.it'

          />
              <p className='p-8 text-justify tracking-widest  '>An app to assist professional Performing Artists navigate the busy process of auditioning.</p>
          </div>
          <div>
            
          <ProjectItem
            title='Peruz Revuz'
            backgroundImg={peruzImg}
            projectUrl='https://peruz-revuz.vercel.app/'
            tech='JavaScript, CSS, JSON API'
            githubUrl='https://github.com/richardsaudek/Peruz-Revuz'

          />
              <p className='p-8 text-justify tracking-widest  '>An app that allows you to search by book title to find the NYTimes reviews.</p>
          </div>

          <div>
            
            <ProjectItem
              title='FrankenStory'
              backgroundImg={frankenImg}
              projectUrl=''
              tech='JavaScript, CSS, JSON API'
              githubUrl='https://github.com/donkeykong718/frankenstory'
  
            />
                <p className='p-8 text-justify tracking-widest  '>An app that allows you to search by book title to find the NYTimes reviews.</p>
          </div>
          
          <div>
            
            <ProjectItem
              title='MooChaCha'
              backgroundImg={moochachaImg}
              projectUrl='https://moo-cha-cha.vercel.app/'
              tech='JavaScript, CSS, JSON API'
              githubUrl='https://github.com/donkeykong718/frankenstory'
  
            />
                <p className='p-8 text-justify tracking-widest  '>An app that allows you to search by book title to find the NYTimes reviews.</p>
            </div>
  

        </div>
        <div className='flex justify-center py-12'>
          <Link href='/#contact'>
              <div className='  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleDown
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Projects;