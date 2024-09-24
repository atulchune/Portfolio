import React from 'react'
import Image from 'next/image'
const resume = () => {
    return (
        <div className='md:p-[70px] md:w-full '>
            <div className='md:bg-[#1e1f1d] md:rounded-3xl md:py-[50px] md: md:overflow-hidden md:h-screen md:relative'>
                <div className='md:flex md:justify-between'>
                    <div className='md:pl-[50px] md:w-1/2 '>
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
                    <div className='md:absolute md:-right-[240px]  md:-bottom-28'>
                        <svg width="760" height="760" viewBox="0 0 760 760" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M380 4.28287e-05C170.888 5.19693e-05 -2.57837e-05 170.138 -1.66103e-05 380C-7.46973e-06 589.112 170.138 760 380 760C589.862 760 760 589.862 760 380C759.251 170.888 589.112 3.36881e-05 380 4.28287e-05ZM380 83.1956C544.142 83.1955 676.805 216.608 676.805 380C676.805 544.142 543.393 676.805 380 676.805C215.858 676.805 83.1953 543.392 83.1953 380C82.4457 215.858 215.858 83.1956 380 83.1956Z" fill="black" fill-opacity="0.5" />
                        </svg>

                    </div>

                </div>
                <div className='md:grid md:grid-cols-3 md:pt-[50px] md:pl-[100px] md:pr-[50px]'>
                    <div className='md:col-span-1 md:bg-red-300 '>
                        <div className='space-y-2'>
                            <div className='md:flex md:items-center md:gap-2'>
                                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Icon" d="M21.4089 15.6992L14.4564 9.66102M8.47579 9.66102L1.52334 15.6992M1 4.62924L9.54549 10.381C10.2375 10.8468 10.5835 11.0796 10.9598 11.1699C11.2923 11.2495 11.6399 11.2495 11.9724 11.1699C12.3487 11.0796 12.6947 10.8468 13.3867 10.381L21.9322 4.62924M6.02373 17.7119H16.9085C18.6669 17.7119 19.5462 17.7119 20.2178 17.3828C20.8086 17.0934 21.289 16.6315 21.59 16.0634C21.9322 15.4176 21.9322 14.5722 21.9322 12.8814V6.44068C21.9322 4.74984 21.9322 3.90442 21.59 3.25861C21.289 2.69053 20.8086 2.22868 20.2178 1.93923C19.5462 1.61017 18.6669 1.61017 16.9085 1.61017H6.02373C4.26526 1.61017 3.38602 1.61017 2.71438 1.93923C2.12358 2.22868 1.64325 2.69053 1.34222 3.25861C1 3.90442 1 4.74984 1 6.44068V12.8814C1 14.5722 1 15.4176 1.34222 16.0634C1.64325 16.6315 2.12358 17.0934 2.71438 17.3828C3.38602 17.7119 4.26526 17.7119 6.02373 17.7119Z" stroke="white" stroke-width="1.61017" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className='md:text-justify md:text-white md:text-[15px] md:font-normal '>ee.ankit.kumar.9@gmail.com</span>
                            </div>
                            <div className='md:flex md:items-center md:gap-2'>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Icon" d="M5.7171 7.06121C6.31943 8.31576 7.14054 9.49156 8.18042 10.5314C9.2203 11.5713 10.3961 12.3924 11.6506 12.9948C11.7586 13.0466 11.8125 13.0725 11.8808 13.0924C12.1234 13.1631 12.4213 13.1123 12.6268 12.9652C12.6846 12.9238 12.7341 12.8743 12.833 12.7754C13.1356 12.4728 13.2869 12.3215 13.439 12.2226C14.0127 11.8496 14.7523 11.8496 15.326 12.2226C15.4781 12.3215 15.6294 12.4728 15.9319 12.7754L16.1006 12.944C16.5605 13.404 16.7904 13.6339 16.9154 13.8809C17.1638 14.3721 17.1638 14.9521 16.9154 15.4433C16.7904 15.6903 16.5605 15.9203 16.1006 16.3802L15.9641 16.5166C15.5058 16.975 15.2766 17.2041 14.965 17.3792C14.6193 17.5734 14.0823 17.713 13.6857 17.7119C13.3284 17.7108 13.0841 17.6415 12.5956 17.5028C9.97044 16.7577 7.49327 15.3518 5.42664 13.2852C3.36002 11.2186 1.95415 8.74142 1.20904 6.11624C1.07039 5.62775 1.00107 5.3835 1.00001 5.02613C0.998827 4.62957 1.13847 4.09258 1.33269 3.74684C1.50773 3.43525 1.7369 3.20608 2.19525 2.74773L2.33167 2.61131C2.7916 2.15138 3.02156 1.92142 3.26854 1.7965C3.75972 1.54806 4.33979 1.54806 4.83097 1.7965C5.07795 1.92142 5.30791 2.15138 5.76784 2.61131L5.93648 2.77995C6.23904 3.08251 6.39032 3.23379 6.48923 3.38591C6.86222 3.9596 6.86222 4.69918 6.48923 5.27286C6.39032 5.42498 6.23904 5.57626 5.93648 5.87882C5.83755 5.97775 5.78809 6.02722 5.74669 6.08504C5.59955 6.29052 5.54875 6.58845 5.61948 6.83107C5.63938 6.89935 5.66529 6.9533 5.7171 7.06121Z" stroke="white" stroke-width="1.61017" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className='md:text-justify md:text-white md:text-[15px] md:font-normal'>phone</span>
                            </div>
                            <div className='md:flex md:items-center md:gap-2'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M17.1751 0C17.7445 0 18.2906 0.22619 18.6932 0.62881C19.0959 1.03143 19.322 1.5775 19.322 2.14689V17.1751C19.322 17.7445 19.0959 18.2906 18.6932 18.6932C18.2906 19.0959 17.7445 19.322 17.1751 19.322H2.14689C1.5775 19.322 1.03143 19.0959 0.62881 18.6932C0.22619 18.2906 0 17.7445 0 17.1751V2.14689C0 1.5775 0.22619 1.03143 0.62881 0.62881C1.03143 0.22619 1.5775 0 2.14689 0H17.1751ZM16.6384 16.6384V10.9492C16.6384 10.021 16.2697 9.13095 15.6135 8.47468C14.9572 7.8184 14.0671 7.44972 13.139 7.44972C12.2266 7.44972 11.1638 8.00791 10.6486 8.8452V7.65367H7.65367V16.6384H10.6486V11.3463C10.6486 10.5198 11.3141 9.8435 12.1407 9.8435C12.5392 9.8435 12.9215 10.0018 13.2033 10.2837C13.4852 10.5655 13.6435 10.9478 13.6435 11.3463V16.6384H16.6384ZM4.16497 5.96836C4.64326 5.96836 5.10196 5.77836 5.44016 5.44016C5.77836 5.10196 5.96836 4.64326 5.96836 4.16497C5.96836 3.16667 5.16328 2.35085 4.16497 2.35085C3.68383 2.35085 3.22241 2.54197 2.88219 2.88219C2.54197 3.22241 2.35085 3.68383 2.35085 4.16497C2.35085 5.16328 3.16667 5.96836 4.16497 5.96836ZM5.65706 16.6384V7.65367H2.68362V16.6384H5.65706Z" fill="white" />
                                </svg>
                                <span className='md:text-justify md:text-white md:text-[15px] md:font-normal'>ankit-kumar-462b641b2</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-2 md:bg-green-400'>
                        content
                    </div>
                </div>
            </div>
        </div>

    )
}

export default resume

