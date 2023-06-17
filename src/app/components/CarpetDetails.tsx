import React from 'react'
import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarpetProps } from '../../../types';
import CustomButton from './CustomButton';
interface CarpetDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  carpet: CarpetProps
}
const CarpetDetails = ({isOpen , closeModal , carpet} : CarpetDetailsProps) => {
const handleShopee = () => {
    window.location.href = 'https://shopee.vn/Th%E1%BA%A3m-t%E1%BA%ADp-yoga-th%E1%BA%A3m-t%E1%BA%ADp-gym-TPE-2-l%E1%BB%9Bp-ch%E1%BB%91ng-tr%C6%B0%E1%BB%A3t-6mm-8mm-t%E1%BA%A1i-nh%C3%A0-_-Kh%E1%BB%8FeSport365-i.779782582.13593285359?xptdk=25ec06a8-463e-4b98-b2fe-18b34750cfee';
  };
  return (
    <>
    <Transition appear show={isOpen} as={Fragment} >
         <Dialog as='div' className='relative z-10' onClose={closeModal}>
             <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image src={carpet.src} alt='car model' fill priority className='object-contain' />
                  </div>

                  <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src="/images/c-model.png" alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src="/images/c-detail.png" alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image  src="/images/c-bag.png" alt='car model' fill priority className='object-contain' />
                    </div>
                  </div>
                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(carpet).map(([key, value]) => (
  <div className="flex justify-between gap-5 w-full text-right" key={key}>
    {(key !== "src") && (
      <h4 className="text-grey capitalize">
        {key.split("_").join(" ")}
      </h4>
    )}
    {(key !== "src") && <p className="text-black-100 font-semibold">{value}</p>}
  </div>
))}

                  </div>
                  <div className='flex flex-row gap-4 items-center justify-center mt-10'>
                    <CustomButton 
                    containerStyles="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    title='Buy with token' ></CustomButton>
                     <CustomButton
                     containerStyles="bg-white  hover:bg-pumpkin text-red hover:text-white font-bold py-2 px-4 rounded border border-red"
                     rightIcon='/shopee.svg'
                     handleClick={handleShopee}
                     title='Shopee' ></CustomButton>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
          </div>
         </Dialog>
    </Transition>
    </>
  )
}

export default CarpetDetails