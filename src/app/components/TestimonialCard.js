import Image from 'next/image';
import React from 'react';

export default function TestimonialCard() {
  return (
    <div className='bg-white  rounded-lg m-4 border-2 border-primaryLight p-4 relative cursor-grab'>
      <Image
        src='/images/testleft2.png'
        alt='testLeft img'
        width={100}
        height={100}
        className='absolute top-0 left-0'
      />
      <Image
        src='/images/testright2.png'
        alt='testLeft img'
        width={100}
        height={100}
        className='absolute bottom-0 right-0'
      />
      <div className='p-10 px-8 flex flex-col gap-5'>
        <p className='text-primary text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          tenetur quas ipsa earum sit, fugit illum asperiores! Odio explicabo
          aut quia rem praesentium magnam, impedit numquam. Delectus numquam
          quisquam quae?
        </p>

        <div className='flex w-full items-center gap-5'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-base lg:text-lg font-bold'>Joshua Keith</h3>
            <p className='text-sm lg:text-base text-primary'>Senior Client</p>
          </div>
        </div>
      </div>
    </div>
  );
}
