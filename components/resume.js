import React from 'react'
import Image from 'next/image'

import ResumeContent from './resume-content'
const resume = () => {
    return (
        <div className='md:p-[70px] md:w-full md:text-white md:md:font-montserrat '>
            <div className='md:bg-[#1e1f1d] md:rounded-3xl md:py-[50px] md: md:overflow-hidden md:h-full md:relative'>
                <div className='h-[50%] w-[2px] absolute top-40 left-10 bg-white/30'></div>
                {/* resume header  */}

                <div className='md:flex md:justify-between'>
                    <div className='md:pl-[60px] md:w-1/2 '>
                        <button className='md:relative md:text-white md:text-xl md:font-light font-montserrat md:px-10 md:py-[15px] md:rounded-[50px] md:border md:border-white'>
                            Resume
                            <div className='md:absolute md:-right-[35px] md:top-2'>
                                <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M22.5 45.5C34.9264 45.5 45 35.4264 45 23C45 10.5736 34.9264 0.5 22.5 0.5C10.0736 0.5 0 10.5736 0 23C0 28.3604 1.87453 33.283 5.00384 37.1481L22.6252 19.9672H11.0655C9.68476 19.9672 8.56548 18.8479 8.56548 17.4672C8.56548 16.0865 9.68476 14.9672 11.0655 14.9672L28.7705 14.9672C30.1512 14.9672 31.2705 16.0865 31.2705 17.4672V34.7298C31.2705 36.1105 30.1512 37.2298 28.7705 37.2298C27.3898 37.2298 26.2705 36.1105 26.2705 34.7298V23.3963L8.56082 40.6633C12.3936 43.6921 17.2357 45.5 22.5 45.5Z" fill="#D9D9D9" />
                                </svg>
                            </div>
                        </button>

                        <h1 className='text-white text-3xl font-medium md:pt-[50px]'>“The details are not the details.<br /> They make the design.”</h1>
                        <p className='text-[#afafaf] text-xl font-light md:py-2'>Charles Eames</p>
                    </div>

                    <div className='md:gap-6 md:flex md:w-1/2 md:absolute md:-right-10'>
                        <div className='w-full h-[200px]'>
                            <Image
                                src='/img1.png'
                                width={300}
                                height={200}
                                className='w-full h-full object-cover rounded-xl'
                                alt='Image 1'
                            />
                        </div>
                        <div className='w-full h-[200px] '>
                            <Image
                                src='/img2.png'
                                width={150}
                                height={300}
                                className='w-full h-full object-cover rounded-xl'
                                alt='Image 2'
                            />
                        </div>
                    </div>


                </div>
                <div className='relative'>
                    <div className='h-[70%] w-[2px] absolute top-0 left-20 bg-white/30'></div>
                    <ResumeContent />
                </div>

                {/* background svg */}

                <div className='md:absolute md:-right-[240px] md:-bottom-28'>
                    <svg width="760" height="760" viewBox="0 0 760 760" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M380 4.28287e-05C170.888 5.19693e-05 -2.57837e-05 170.138 -1.66103e-05 380C-7.46973e-06 589.112 170.138 760 380 760C589.862 760 760 589.862 760 380C759.251 170.888 589.112 3.36881e-05 380 4.28287e-05ZM380 83.1956C544.142 83.1955 676.805 216.608 676.805 380C676.805 544.142 543.393 676.805 380 676.805C215.858 676.805 83.1953 543.392 83.1953 380C82.4457 215.858 215.858 83.1956 380 83.1956Z" fill="black" fill-opacity="0.5" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default resume

