import React from 'react';
import VideoButton from '../components/VideoButton';

export default function AttachedPromo() {
  return (
    <div className='flex justify-center py-20 attached-promo'>
      <VideoButton
        videoSrc={'https://youtu.be/cv4v7E2990w?si=mfK1aw9xdeksnDAw'}
      />
    </div>
  );
}
