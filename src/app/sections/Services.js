import Image from 'next/image';
import React from 'react';

export default function Services() {
  return (
    <div className='flex flex-col p-4 md:p-8 lg:p-12 2xl:p-20 relative bg-pink-50'>
      <div className='flex justify-center gap-3 flex-col w-full text-center'>
        <h2 className='fancy-text text-lg'>Our Services</h2>
        <Image
          src={'/images/divider2.png'}
          alt='divider'
          width={200}
          height={100}
          className='w-40 h-5 mx-auto'
        />
        <h3 className='text-4xl font-bold'>Complete Wedding Planning</h3>
      </div>

      <div class='py-10 flex flex-wrap'>
        <div class='w-1/3'>
          <div className=' p-3 py-6 m-3 bg-white rounded-lg flex flex-col items-center gap-4 text-center'>
            <Image
              src={'/images/sideshapeleft.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px]'
            />
            <h2 className='text-3xl font-bold'>Flower Design</h2>
            <p className='text-base text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              omnis hic. Praesentium, autem! Quaerat, similique totam. Suscipit
              qui{' '}
            </p>
          </div>
        </div>
        <div class='w-1/3'>
          <div className=' p-3 py-6 m-3 bg-white rounded-lg flex flex-col items-center gap-4 text-center'>
            <Image
              src={'/images/sideshapeleft.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px]'
            />
            <h2 className='text-3xl font-bold'>Flower Design</h2>
            <p className='text-base text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              omnis hic. Praesentium, autem! Quaerat, similique totam. Suscipit
              qui{' '}
            </p>
          </div>
        </div>
        <div class='w-1/3'>
          <div className=' p-3 py-6 m-3 bg-white rounded-lg flex flex-col items-center gap-4 text-center'>
            <Image
              src={'/images/sideshapeleft.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px]'
            />
            <h2 className='text-3xl font-bold'>Flower Design</h2>
            <p className='text-base text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              omnis hic. Praesentium, autem! Quaerat, similique totam. Suscipit
              qui{' '}
            </p>
          </div>
        </div>
        <div class='w-1/3'>
          <div className=' p-3 py-6 m-3 bg-white rounded-lg flex flex-col items-center gap-4 text-center'>
            <Image
              src={'/images/sideshapeleft.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px]'
            />
            <h2 className='text-3xl font-bold'>Flower Design</h2>
            <p className='text-base text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              omnis hic. Praesentium, autem! Quaerat, similique totam. Suscipit
              qui{' '}
            </p>
          </div>
        </div>
        <div class='w-1/3'>
          <div className=' p-3 py-6 m-3 bg-white rounded-lg flex flex-col items-center gap-4 text-center'>
            <Image
              src={'/images/sideshapeleft.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px]'
            />
            <h2 className='text-3xl font-bold'>Flower Design</h2>
            <p className='text-base text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              omnis hic. Praesentium, autem! Quaerat, similique totam. Suscipit
              qui{' '}
            </p>
          </div>
        </div>
        <div class='w-1/3'>
          <div className=' p-3 py-6 m-3 bg-white rounded-lg flex flex-col items-center gap-4 text-center'>
            <Image
              src={'/images/sideshapeleft.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px]'
            />
            <h2 className='text-3xl font-bold'>Flower Design</h2>
            <p className='text-base text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              omnis hic. Praesentium, autem! Quaerat, similique totam. Suscipit
              qui{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
