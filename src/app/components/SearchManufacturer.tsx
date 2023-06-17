import { Combobox } from '@headlessui/react';
import React from 'react';
import Image from 'next/image';
function SearchManufacturer() {
  return (
    <>
     <div className='flex-1 max-sm:w-full flex justify-start items-center'>
     <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/search.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='search logo'
            />
    </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className=' w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'
            displayValue={(item: string) => item}
            onChange={()=>{}} 
            placeholder='Search...'
          />
        </div>
     </Combobox>
   </div>
    </>
  
  );
}

export default SearchManufacturer