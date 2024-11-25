'use client';
import Image from 'next/image';
import React from 'react';
import { BiArea } from "react-icons/bi";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PropertyCards = ({ properties, setLocation }) => {
  const handleLocation = (location) => {
    setLocation(location)

    // Scroll to the section with id="map"
    const mapSection = document.getElementById('map');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className='flex flex-col gap-4'>
      {
        properties?.map((property) => (
          <div key={property.id} className='rounded-lg shadow-sm cursor-pointer bg-primary/5 flex flex-col hover:bg-primary/10 duration-200' onClick={() => handleLocation(property.locationMap)}>
            <div className="property__image relative rounded-t-lg">
              <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {
                  property.image.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image src={image} alt="property" width={1000} height={1000} className='rounded-t-lg w-full h-72 object-cover object-center overflow-hidden' />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/30 to-gray-900/5 transition duration-200 z-10' />
              <h2 className='absolute bottom-2 right-2 bg-white/80 dark:bg-gray-900/80 px-2 font-bold py-1 rounded-md shadow-sm z-20'>{property.propertyType}</h2>
            </div>

            <div className="property__content flex flex-col gap-4 p-3 text-textLight/80 dark:text-textDark/80">
              <div className='flex flex-col gap-1'>
                <p className='font-bold'>{property.address}</p>
                <div className='flex justify-between items-center'>
                  <p className='text-lg'>{property.location}</p>
                  <p className='text-lg flex items-center gap-2'><BiArea /> {property.apartmentSize}</p>
                </div>
              </div>

              <div className='flex justify-end w-full'>
                <p className='font-bold text-secondary/70 text-2xl'>{property.price} BDT/Month</p>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  );
};

export default PropertyCards;