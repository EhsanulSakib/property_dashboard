'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import FormModal from '../sub-components/modal/FormModal';

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <section className='flex justify-between items-center w-full'>
      <h2 className='text-3xl lg:text-4xl font-bold text-primary'>Dashboard</h2>
      <button className='bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 duration-200' onClick={openModal}>
        + Add Property
      </button>
      {
        isOpen && (
          <div className='absolute top-0 left-0 w-full h-screen bg-black/50'>
            <FormModal setIsOpen={setIsOpen} />
          </div>
        )
      }
    </section>
  );
};

export default Top;