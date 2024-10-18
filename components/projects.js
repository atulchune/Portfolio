import React from 'react'
import Link from 'next/link'
import ProjectCard from './project-card'

const Project = () => {
    return (
        <div>
            <div className=' md:p-[70px] md:w-full md:text-white md:font-montserrat '>
                <div className='md:flex md:justify-between md:items-baseline'>
                    <button className='md:col-span-1 md:relative md:text-white md:text-xl md:font-light font-montserrat md:px-10 md:py-[15px] md:rounded-[50px] md:border md:border-white'>
                        Portfolio
                        <div className='md:absolute md:-right-[35px] md:top-2 md:z-20'>
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M22.5 45.5C34.9264 45.5 45 35.4264 45 23C45 10.5736 34.9264 0.5 22.5 0.5C10.0736 0.5 0 10.5736 0 23C0 28.3604 1.87453 33.283 5.00384 37.1481L22.6252 19.9672H11.0655C9.68476 19.9672 8.56548 18.8479 8.56548 17.4672C8.56548 16.0865 9.68476 14.9672 11.0655 14.9672L28.7705 14.9672C30.1512 14.9672 31.2705 16.0865 31.2705 17.4672V34.7298C31.2705 36.1105 30.1512 37.2298 28.7705 37.2298C27.3898 37.2298 26.2705 36.1105 26.2705 34.7298V23.3963L8.56082 40.6633C12.3936 43.6921 17.2357 45.5 22.5 45.5Z" fill="#D9D9D9" />
                            </svg>
                        </div>
                    </button>
                    <div className='md:col-span-1'>
                        <h1 className='md:text-right text-white md:text-3xl md:font-medium font-montserrat'>“If you think good design is expensive, you<br /> should look at the cost of bad design”</h1>
                        <p className='md:text-right text-[#afafaf] md:text-xl font-light'>Ralf Speth</p>
                    </div>
                </div>

                <ProjectCard/>
            </div>
        </div>
    )
}

export default Project
