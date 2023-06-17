import React from 'react'
import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { TileProps } from '../../../types';
import CustomButton from './CustomButton';
interface TileDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  tile: TileProps
}
const TileDetails = ({isOpen , closeModal , tile} : TileDetailsProps) => {
const handleShopee = () => {
    window.location.href = 'https://shopee.vn/G%E1%BA%A1ch-t%E1%BA%ADp-yoga-x%E1%BB%91p-g%E1%BB%91i-t%E1%BA%ADp-EVA-in-hoa-mandala-cao-c%E1%BA%A5p-c%E1%BB%A9ng-g%E1%BA%A5p-3-l%E1%BA%A7n-g%E1%BA%A1ch-th%C3%B4ng-th%C6%B0%E1%BB%9Dng-(1-vi%C3%AAn)-_-Kh%E1%BB%8FeSport365-i.779782582.17172441998?xptdk=4a525d17-027b-471d-a489-b15104978f16&fbclid=IwAR0YuivGzWMH499jzZFz2Q_epcalysRJ7bBkn1Q6IzLIfP-Ve70mNK1IIw0';
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
                    <Image src={tile.src} alt='car model' fill priority className='object-contain' />
                  </div>

                  <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src="/images/t-shop.png" alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image src="/images/t-size.png" alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                      <Image  src="/images/t-model.png" alt='car model' fill priority className='object-contain' />
                    </div>
                  </div>
                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(tile).map(([key, value]) => (
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

export default TileDetails