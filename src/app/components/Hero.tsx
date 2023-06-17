import React from 'react'
import Button from './buttons/button'
import { blue } from '@mui/material/colors'
import CustomButton from './CustomButton'
import Image from 'next/image'
const Hero = () => {
    const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=' flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex-1 pt-10 sm:px-16 px-6'>
            <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'> 
                Practice yoga easily with us
            </h1>
            <p className='text-[27px] text-black-100 font-light mt-5'>
                High-quality yoga tiles designed 
                to enhance your practice and elevate your yoga experience.
            </p>
            <CustomButton
                title='Explore Tiles'
                containerStyles='bg-primary text-white rounded-full mt-10'
                handleClick={handleScroll}
            ></CustomButton>
            
        </div>
        <div className='xl:flex-[1.5] flex justify-center items-center w-full xl:h-screen'>
            <div className='relative xl:w-full w-[60%] xl:h-full h-[590px] z-0'>
                <Image  src='/Images/yg.jpg' alt='hero' fill  className='object-fill border-2 border-gray-300 rounded-lg'  />
               
            </div>
        </div>
    </div>
  )
}

export default Hero