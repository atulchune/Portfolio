
import React, { useState } from 'react';
import Image from 'next/image'; // Importing Image from Next.js

const ProjectCard = ({ title, type, isActive, toggleActive }) => {

    return (
        <div
            className={`md:flex md:justify-between md:p-[24px] md:rounded-[15px] cursor-pointer ${isActive ? 'md:bg-[#1f1f1d]' :   'md:border-b md:border-white/30' 
                }`}
                onClick={toggleActive}
        >
            <div className='md:flex-col'>
                <h1 className='md:text-white md:text-[22px] md:font-medium'>
                    {title}
                </h1>
                <span>{type}</span>
            </div>
            {
                isActive ?
                    <div>
                        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M22.5 45.5C34.9264 45.5 45 35.4264 45 23C45 10.5736 34.9264 0.5 22.5 0.5C10.0736 0.5 0 10.5736 0 23C0 28.3604 1.87453 33.283 5.00384 37.1481L22.6252 19.9672H11.0655C9.68476 19.9672 8.56548 18.8479 8.56548 17.4672C8.56548 16.0865 9.68476 14.9672 11.0655 14.9672L28.7705 14.9672C30.1512 14.9672 31.2705 16.0865 31.2705 17.4672V34.7298C31.2705 36.1105 30.1512 37.2298 28.7705 37.2298C27.3898 37.2298 26.2705 36.1105 26.2705 34.7298V23.3963L8.56082 40.6633C12.3936 43.6921 17.2357 45.5 22.5 45.5Z" fill="#D9D9D9" />
                        </svg>
                    </div>
                    :
                    <div>
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Subtract">
                                <mask id="path-1-inside-1_132_100" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90992 38.9099C15.6967 47.6967 29.9429 47.6967 38.7297 38.9099C47.5165 30.1231 47.5165 15.8769 38.7297 7.09008C29.9429 -1.69672 15.6967 -1.69672 6.90992 7.09008C2.7375 11.2625 0.546357 16.6659 0.336496 22.1313L28.7208 22.4906L17.9396 11.7094C17.549 11.3189 17.549 10.6857 17.9396 10.2952C18.3301 9.90465 18.9633 9.90465 19.3538 10.2952L31.8731 22.8145C32.2636 23.205 32.2636 23.8382 31.8731 24.2287L19.6666 36.4352C19.2761 36.8258 18.6429 36.8258 18.2524 36.4352C17.8619 36.0447 17.8619 35.4115 18.2524 35.021L28.7819 24.4915L0.348122 24.1316C0.617152 29.507 2.80442 34.8044 6.90992 38.9099Z" />
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90992 38.9099C15.6967 47.6967 29.9429 47.6967 38.7297 38.9099C47.5165 30.1231 47.5165 15.8769 38.7297 7.09008C29.9429 -1.69672 15.6967 -1.69672 6.90992 7.09008C2.7375 11.2625 0.546357 16.6659 0.336496 22.1313L28.7208 22.4906L17.9396 11.7094C17.549 11.3189 17.549 10.6857 17.9396 10.2952C18.3301 9.90465 18.9633 9.90465 19.3538 10.2952L31.8731 22.8145C32.2636 23.205 32.2636 23.8382 31.8731 24.2287L19.6666 36.4352C19.2761 36.8258 18.6429 36.8258 18.2524 36.4352C17.8619 36.0447 17.8619 35.4115 18.2524 35.021L28.7819 24.4915L0.348122 24.1316C0.617152 29.507 2.80442 34.8044 6.90992 38.9099Z" fill="#727271" fill-opacity="0.4" />
                                <path d="M0.336496 22.1313L-0.662768 22.0929L-0.702138 23.1182L0.323839 23.1312L0.336496 22.1313ZM28.7208 22.4906L28.7081 23.4905L31.166 23.5216L29.4279 21.7835L28.7208 22.4906ZM19.3538 10.2952L20.0609 9.58807L19.3538 10.2952ZM31.8731 22.8145L31.166 23.5216L31.8731 22.8145ZM28.7819 24.4915L29.489 25.1986L31.166 23.5216L28.7945 23.4916L28.7819 24.4915ZM0.348122 24.1316L0.360779 23.1317L-0.703847 23.1182L-0.650629 24.1816L0.348122 24.1316ZM38.0226 38.2028C29.6263 46.599 16.0133 46.599 7.61703 38.2028L6.20282 39.617C15.3801 48.7943 30.2595 48.7943 39.4368 39.617L38.0226 38.2028ZM38.0226 7.79718C46.4189 16.1935 46.4189 29.8065 38.0226 38.2028L39.4368 39.617C48.6142 30.4397 48.6142 15.5603 39.4368 6.38297L38.0226 7.79718ZM7.61703 7.79718C16.0133 -0.599087 29.6263 -0.599087 38.0226 7.79718L39.4368 6.38297C30.2595 -2.79435 15.3801 -2.79435 6.20282 6.38297L7.61703 7.79718ZM1.33576 22.1697C1.53634 16.9461 3.62967 11.7845 7.61703 7.79718L6.20282 6.38297C1.84533 10.7405 -0.443621 16.3858 -0.662768 22.0929L1.33576 22.1697ZM0.323839 23.1312L28.7081 23.4905L28.7334 21.4907L0.349153 21.1314L0.323839 23.1312ZM29.4279 21.7835L18.6467 11.0023L17.2325 12.4165L28.0136 23.1977L29.4279 21.7835ZM18.6467 11.0023L17.2325 9.58807C16.4514 10.3691 16.4514 11.6354 17.2325 12.4165L18.6467 11.0023ZM18.6467 11.0023L20.0609 9.58807C19.2798 8.80702 18.0135 8.80702 17.2325 9.58807L18.6467 11.0023ZM18.6467 11.0023L31.166 23.5216L32.5802 22.1074L20.0609 9.58807L18.6467 11.0023ZM31.166 23.5216L32.5802 24.9358C33.3613 24.1548 33.3613 22.8885 32.5802 22.1074L31.166 23.5216ZM31.166 23.5216L18.9595 35.7281L20.3737 37.1423L32.5802 24.9358L31.166 23.5216ZM18.9595 35.7281L17.5453 37.1423C18.3263 37.9234 19.5927 37.9234 20.3737 37.1423L18.9595 35.7281ZM18.9595 35.7281L17.5453 34.3139C16.7642 35.095 16.7642 36.3613 17.5453 37.1423L18.9595 35.7281ZM18.9595 35.7281L29.489 25.1986L28.0748 23.7844L17.5453 34.3139L18.9595 35.7281ZM28.7945 23.4916L0.360779 23.1317L0.335465 25.1315L28.7692 25.4914L28.7945 23.4916ZM7.61703 38.2028C3.69356 34.2793 1.60399 29.2191 1.34687 24.0816L-0.650629 24.1816C-0.369688 29.795 1.91527 35.3294 6.20282 39.617L7.61703 38.2028Z" fill="black" mask="url(#path-1-inside-1_132_100)" />
                            </g>
                        </svg>
                    </div>
            }
        </div>
    );
};

export default ProjectCard;