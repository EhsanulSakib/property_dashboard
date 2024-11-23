'use client';
import { useState } from 'react';
import { user } from '../../data/user.data'
import Image from 'next/image';
const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative border-2 border-neutralBorder rounded-full cursor-pointer shadow-sm' onClick={() => setIsOpen(!isOpen)}>
      <Image src={user.image} alt="user" width={300} height={300} className='rounded-full w-10 lg:w-12 h-10 lg:h-12 object-cover object-top' />

      <div className={`${isOpen ? 'block' : 'hidden'} absolute p-4 bg-white top-[3.5rem] shadow-md right-0 rounded-md text-lg text-center`}>
        <p className='font-bold text-primary'>{user.name}</p>
        <p className='text-base'>{user.email}</p>
        <p className='w-full py-2 hover:bg-error/80 bg-error text-white rounded-md mt-2 font-bold'>Log Out</p>
      </div>

    </div>
  );
};

export default User;