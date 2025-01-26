import Image from 'next/image';
import React from 'react';
import Button from '../components/Button';

export default function AboutUs() {
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 relative flex-col lg:flex-row'>
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
      <div class='w-full lg:w-1/2 flex flex-col gap-4'>
        <h2 className='fancy-text text-lg text-secondary'>Hi , Meet Dreams</h2>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          Your Advanced and Number One Wedding Planner
        </h3>
        <p className='w-full lg:w-2/3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero
          pariatur ipsum incidunt nesciunt voluptatum ipsa eveniet placeat animi
          odit, quae aliquid, sint quod laboriosam quasi natus? Quisquam,
          obcaecati ipsa.
        </p>

        <Button className='p-3 lg:p-4 px-4 lg:px-6' text={'Book a Wedding'} />
      </div>
      <div class='w-full lg:w-1/2 relative flex justify-center my-5 lg:my-0'>
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
          className='w-2/5 lg:w-3/5 absolute bottom-0 lg:-bottom-8 xl:bottom-0 -left-5 lg:-left-1/4 xl:-left-1/4 floating'
        />
      </div>
    </div>
  );
}
