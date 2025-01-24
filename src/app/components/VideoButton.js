'use client';
import React, { useState } from 'react';

const VideoButton = ({ videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Circular Play Button */}
      <button
        onClick={handleOpen}
        className='flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg border border-gray-300 focus:outline-none'
      >
        {/* Play Icon */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          className='w-6 h-6 text-green-700'
        >
          <polygon points='5,3 19,12 5,21 5,3' />
        </svg>
      </button>

      {/* Video Popup */}
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative bg-white rounded-lg shadow-lg p-8 mx-2 md:mx-0 w-full md:w-1/2 fade-up'>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className='absolute top-2 right-2 text-gray-700 hover:text-gray-900'
            >
              ✖
            </button>
            {/* Video Player */}
            <video controls className='w-full h-auto'>
              <source src={videoSrc} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoButton;
