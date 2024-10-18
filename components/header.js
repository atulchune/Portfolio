import React from 'react'

const Header = () => {
    return (
        <div className='absolute w-full'>
            <header className='md:flex md:justify-between md:px-2 md:items-center'>
                <div className='md:py-8 md:px-10'>
                    <svg width="87" height="68" viewBox="0 0 87 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.7564 2.96116C41.4831 -1.18655 47.9344 0.744082 47.9344 5.7078V68H5.27065C1.29176 68 -1.09309 63.5782 1.09262 60.2534L38.7564 2.96116Z" fill="white" />
                        <path d="M47.9344 6.5C47.9344 3.73858 50.173 1.5 52.9344 1.5H79.3374C83.9967 1.5 86.1235 7.31141 82.5648 10.3189L64.2558 25.7921C62.1813 27.5452 61.8858 30.6337 63.5901 32.7485L85.4418 59.8625C88.0779 63.1334 85.7497 68 81.5487 68H47.9344V6.5Z" fill="#C6A87F" />
                    </svg>

                </div>
                <div>
                    <ul className='md:flex md:gap-14 md:bg-transparent md:px-20 md:text-lg md:text-white md:h-full md:py-6'>
                        <li id='#home'>HOME</li>
                        <li id='#about'>ABOUT</li>
                        <li id='#company'>RESUME</li>
                        <li id='#portfolio'>PORTFOLIO</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
