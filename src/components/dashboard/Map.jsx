import React from 'react';

const Map = ({ location }) => {
  return (
    <div className='w-full border h-full border-neutralBorder rounded-md'>
      <iframe src={location} className='w-full h-full ' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;