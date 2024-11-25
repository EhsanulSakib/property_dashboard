import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-secondary/70 px-4 py-8 lg:py-16'>
      <div className='flex flex-col justify-between w-full xl:w-3/5 px-[1%] xl:px-[0%] mx-auto gap-8'>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-16'>
          {/* first Section */}
          <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-2xl'>Categories</h2>

            <ul className='text-lg flex flex-col gap-2'>
              <li>Nutrition and diet</li>
              <li>Fitness training</li>
              <li>Mindfulness</li>
              <li>Mental health</li>
              <li>Personal growth</li>
              <li>Social well-being</li>
            </ul>
          </div>

          {/* second Section */}
          <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-2xl'>About</h2>

            <ul className='text-lg flex flex-col gap-2'>
              <li>About us</li>
              <li>Our partners</li>
              <li>Investors</li>
              <li>Career</li>
            </ul>
          </div>


          {/* third Section */}
          <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-2xl'>Resources</h2>

            <ul className='text-lg flex flex-col gap-2'>
              <li>FAQ</li>
              <li>Refund policies</li>
              <li>Terms and conditions</li>
              <li>Cookie </li>
              <li>Latest posts</li>
            </ul>
          </div>


          {/* fourth Section */}
          <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-2xl'>Support</h2>

            <ul className='text-lg flex flex-col gap-2'>
              <li>Get in touch</li>
              <li>Visit our forum</li>
            </ul>
          </div>

        </div>

        <div className='flex justify-between w-full items-center py-6 border-y border-y-black/20 border-dashed'>
          <h2 className='font-bold text-lg'>Join our official channels</h2>

          <div className='flex gap-2'>
            <Image src={'/assets/icons/social/instagram.png'} alt="facebook" width={1000} height={1000} className='w-8 h-8' />
            <Image src={'/assets/icons/social/x.png'} alt="facebook" width={1000} height={1000} className='w-8 h-8' />
            <Image src={'/assets/icons/social/facebook.png'} alt="facebook" width={1000} height={1000} className='w-8 h-8' />
            <Image src={'/assets/icons/social/discord.png'} alt="facebook" width={1000} height={1000} className='w-8 h-8' />
          </div>
        </div>

        <div>
          <h2>©2024 PropertyManagement. All rights reserved</h2>
        </div>

      </div>
    </div>
  );
};

export default Footer;