import React from 'react';
import { companyInfo } from '../data/companyInfo.data';
import Image from 'next/image';
const Info = () => {
  return (
    <section className='grid grid-cols-2 gap-4 w-full rounded-md'>
      {
        companyInfo.map((info) => (
          <div key={info.heading} className='shadow-sm bg-primary/5 rounded-md p-2 flex flex-col gap-5 hover:bg-primary/10 duration-200'>
            <div className='flex items-center justify-between'>
              <h4 className='text-lg xl:text-xl font-semibold text-primary'>{info.heading}</h4>
              <Image src={info.icon} alt={info.heading} width={300} height={300} className='w-8 h-8' />
            </div>
            <h5 className='text-xl self-end font-semibold'>{info.value}</h5>
          </div>
        ))
      }
    </section>
  );
};

export default Info;