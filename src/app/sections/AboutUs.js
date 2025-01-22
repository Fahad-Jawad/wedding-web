import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 relative'>
      <Image
        src={'/images/sideshapeleft.png'}
        alt='style img'
        width={400}
        height={400}
        className='w-1/6 absolute bottom-1/3 left-0 opacity-25  floating'
      />
      <Image
        src={'/images/sideshaperight.png'}
        alt='style img'
        width={400}
        height={400}
        className='w-1/6 absolute bottom-0 right-0 opacity-25 floating'
      />
      <div class='w-1/2 flex flex-col gap-4'>
        <h2 className='fancy-text text-lg'>Hi , Meet Dreams</h2>
        <h3 className='text-6xl font-bold'>
          Your Advanced and Number One Wedding Planner
        </h3>
        <p className='w-2/3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero
          pariatur ipsum incidunt nesciunt voluptatum ipsa eveniet placeat animi
          odit, quae aliquid, sint quod laboriosam quasi natus? Quisquam,
          obcaecati ipsa.
        </p>

        <button className='p-4 px-6 bg-green-700 text-white w-max fancy-button'>
          Book a Wedding
        </button>
      </div>
      <div class='w-1/2 relative flex justify-center'>
        <div className='w-2/3 relative h-full'>
          <Image
            src={'/images/about-side.png'}
            alt='wedding img'
            width={410}
            height={560}
            className='w-full'
          />
          <Image
            src={'/images/couple-sidemain.png'}
            alt='wedding img'
            width={410}
            height={560}
            className='w-2/3 absolute top-1/4 -right-1/4 floating'
          />
        </div>

        <Image
          src={'/images/couple-side.png'}
          alt='wedding img'
          width={410}
          height={560}
          className=' absolute bottom-0 -left-1/3 floating'
        />
      </div>
    </div>
  );
}
