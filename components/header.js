'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const mobileHeaderBackground = isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-sm' : ''

    return (
        <div className={`w-full z-50 transition-all duration-300 md:absolute ${mobileHeaderBackground} fixed md:static`}>
            <header className='px-4 py-8 md:flex md:justify-between md:items-center md:px-6 md:pt-8 lg:px-10'>
                <div className='flex justify-between items-center'>
                    <svg width="87" height="68" viewBox="0 0 87 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-auto md:w-16 lg:w-20 transition-all duration-300">
                        <path d="M38.7564 2.96116C41.4831 -1.18655 47.9344 0.744082 47.9344 5.7078V68H5.27065C1.29176 68 -1.09309 63.5782 1.09262 60.2534L38.7564 2.96116Z" fill="white" />
                        <path d="M47.9344 6.5C47.9344 3.73858 50.173 1.5 52.9344 1.5H79.3374C83.9967 1.5 86.1235 7.31141 82.5648 10.3189L64.2558 25.7921C62.1813 27.5452 61.8858 30.6337 63.5901 32.7485L85.4418 59.8625C88.0779 63.1334 85.7497 68 81.5487 68H47.9344V6.5Z" fill="#C6A87F" />
                    </svg>
                    <button 
                        onClick={toggleMenu} 
                        className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
                    <ul className='mt-4 md:mt-0 md:flex md:gap-8 lg:gap-14 text-white text-base md:text-sm lg:text-lg'>
                        {['HOME', 'ABOUT', 'RESUME', 'PORTFOLIO'].map((item) => (
                            <li key={item} className='py-2 md:py-0'>
                                <Link 
                                    href={`#${item.toLowerCase()}`} 
                                    className='block w-full py-2 px-4 md:px-0 hover:bg-white/10 md:hover:bg-transparent hover:text-gray-300 transition-colors duration-300 rounded-md'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header



// const Header = () => {
//     return (
//         <div className='absolute w-full'>
//             <header className='md:flex md:justify-between md:px-2 md:items-center'>
//                 <div className='md:py-8 md:px-10'>
//                     <svg width="87" height="68" viewBox="0 0 87 68" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M38.7564 2.96116C41.4831 -1.18655 47.9344 0.744082 47.9344 5.7078V68H5.27065C1.29176 68 -1.09309 63.5782 1.09262 60.2534L38.7564 2.96116Z" fill="white" />
//                         <path d="M47.9344 6.5C47.9344 3.73858 50.173 1.5 52.9344 1.5H79.3374C83.9967 1.5 86.1235 7.31141 82.5648 10.3189L64.2558 25.7921C62.1813 27.5452 61.8858 30.6337 63.5901 32.7485L85.4418 59.8625C88.0779 63.1334 85.7497 68 81.5487 68H47.9344V6.5Z" fill="#C6A87F" />
//                     </svg>

//                 </div>
//                 <div>
//                     <ul className='md:flex md:gap-14 md:bg-transparent md:px-20 md:text-lg md:text-white md:h-full md:py-6'>
//                         <li id='#home'>HOME</li>
//                         <li id='#about'>ABOUT</li>
//                         <li id='#company'>RESUME</li>
//                         <li id='#portfolio'>PORTFOLIO</li>
//                     </ul>
//                 </div>
//             </header>
//         </div>
//     )
// }

// export default Header