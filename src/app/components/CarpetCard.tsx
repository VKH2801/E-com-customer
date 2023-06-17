import React, { useState } from 'react'
import { CarpetProps } from '../../../types'
import Image from 'next/image'
import CustomButton from './CustomButton'
import CarpetDetails from './CarpetDetails'

interface CarpetCardProps {
  carpet: CarpetProps;
}
const  CarpetCard = ({carpet} : CarpetCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

 return (
    <div className="group flex flex-col m-5 p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {carpet.name} 
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {7.0}
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={carpet.src} alt='car model' fill priority className='object-contain' />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/size.svg' width={20} height={20} alt='size' />
            <p className='text-[14px] leading-[17px]'>
            {carpet.size}
            </p>
          </div>
          <div className="flex  justify-center items-center gap-1">
            <p className="text-[18px] leading-[17px] mr-28">{carpet.color}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/images/water.jpg" width={30} height={30} alt="seat" />
            <p className="text-[14px] leading-[17px] ">Waterproof</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            
            handleClick={() => {setIsOpen(true)}}
          />
        </div>
      </div>
    <CarpetDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} carpet={carpet}  />
     
    </div>
 )
}

export default CarpetCard