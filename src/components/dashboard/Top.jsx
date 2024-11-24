import React from 'react';

const Top = () => {
  return (
    <section className='flex justify-between items-center w-full'>
      <h2 className='text-3xl lg:text-4xl font-bold text-primary'>Dashboard</h2>
      <button className='bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 duration-200'>
        + Add Property
      </button>
    </section>
  );
};

export default Top;