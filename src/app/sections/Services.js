import Image from 'next/image';
import React from 'react';
import SectionDivider from '../components/SectionDivider';

export default function Services() {
  return (
    <div className='flex flex-col p-4 md:p-8 lg:p-12 2xl:p-20 relative bg-primaryExtraLight'>
      <div className='flex justify-center gap-3 flex-col w-full text-center'>
        <h2 className='fancy-text text-lg text-primary'>Our Services</h2>
        <SectionDivider className='mx-auto' />
        <h3 className='text-4xl font-bold'>Complete Wedding Planning</h3>
      </div>

      <div class='py-10 flex flex-wrap'>
        <div class='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className=' p-3 py-6 my-4  lg:m-3 h-full bg-white rounded-lg flex flex-col items-center gap-4 text-center group hover:border-secondary border-2 border-white duration-300'>
            <Image
              src={'/images/services/service1.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px] group-hover:scale-105 duration-300'
            />
            <h2 className='text-3xl font-bold group-hover:scale-105 duration-300'>Flower Design</h2>
            <p className='text-base text-gray-300'>
              Exquisite floral arrangements, from bridal bouquets to venue
              décor, crafted to complement your theme beautifully.
            </p>
          </div>
        </div>
        <div class='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className=' p-3 py-6 my-4  lg:m-3 h-full bg-white rounded-lg flex flex-col items-center gap-4 text-center group hover:border-secondary border-2 border-white duration-300'>
            <Image
              src={'/images/services/service2.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px] group-hover:scale-105 duration-300'
            />
            <h2 className='text-3xl font-bold group-hover:scale-105 duration-300'>Photoshoot</h2>
            <p className='text-base text-gray-300'>
              Capture timeless moments with our professionally styled wedding
              photoshoot setups.
            </p>
          </div>
        </div>
        <div class='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className=' p-3 py-6 my-4  lg:m-3 h-full bg-white rounded-lg flex flex-col items-center gap-4 text-center group hover:border-secondary border-2 border-white duration-300'>
            <Image
              src={'/images/services/service3.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px] group-hover:scale-105 duration-300'
            />
            <h2 className='text-3xl font-bold group-hover:scale-105 duration-300'>Wedding Coordination</h2>
            <p className='text-base text-gray-300'>
              We handle all the details—venue setup, guest management, and
              seamless event flow—so you can relax and enjoy your day.
            </p>
          </div>
        </div>
        <div class='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className=' p-3 py-6 my-4  lg:m-3 h-full bg-white rounded-lg flex flex-col items-center gap-4 text-center group hover:border-secondary border-2 border-white duration-300'>
            <Image
              src={'/images/services/service4.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px] group-hover:scale-105 duration-300'
            />
            <h2 className='text-3xl font-bold group-hover:scale-105 duration-300'>Wedding Cake</h2>
            <p className='text-base text-gray-300'>
              Custom-designed wedding cakes that taste as incredible as they
              look, perfectly matching your theme and style.
            </p>
          </div>
        </div>
        <div class='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className=' p-3 py-6 my-4  lg:m-3 h-full bg-white rounded-lg flex flex-col items-center gap-4 text-center group hover:border-secondary border-2 border-white duration-300'>
            <Image
              src={'/images/services/service5.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px] group-hover:scale-105 duration-300'
            />
            <h2 className='text-3xl font-bold group-hover:scale-105 duration-300'>Catering</h2>
            <p className='text-base text-gray-300'>
              Delicious, customized menus that delight your guests, from
              appetizers to full-course meals.
            </p>
          </div>
        </div>
        <div class='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className=' p-3 py-6 my-4  lg:m-3 h-full bg-white rounded-lg flex flex-col items-center gap-4 text-center group hover:border-secondary border-2 border-white duration-300'>
            <Image
              src={'/images/services/service6.png'}
              alt='service 1'
              width={200}
              height={200}
              className='w-[200px] h-[200px] group-hover:scale-105 duration-300'
            />
            <h2 className='text-3xl font-bold group-hover:scale-105 duration-300'>Decor</h2>
            <p className='text-base text-gray-300'>
              Stunning venue decorations, including elegant table settings,
              luxurious drapery, and ambient lighting, to create the perfect
              atmosphere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
