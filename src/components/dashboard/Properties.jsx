'use client'
import React, { useEffect, useState } from 'react';
import { propertiesData } from '../data/property.data';
import PropertyCards from '../sub-components/dashboard/PropertyCards';
import Map from './Map';
const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState();

  const handleFilterChange = (e, type) => {
    const value = e.target.value;

    if (type === 'filter') {
      setFilter(value);
      applyFilters(value, status);
    } else if (type === 'status') {
      setStatus(value);
      applyFilters(filter, value);
    }
  }

  const applyFilters = (filterValue, statusValue) => {
    let filteredData = propertiesData;

    // Apply filter by property status (Available/Rented)
    if (statusValue) {
      filteredData = filteredData.filter(property => property.rent === statusValue);
    }

    // Apply filter by filter value
    if (filterValue) {
      filteredData = filteredData.filter(property =>
        property.propertyType === filterValue
      );
    }

    setProperties(filteredData);
  };

  useEffect(() => {
    setProperties(propertiesData);
    setLocation(propertiesData[0].locationMap);
  }, []);

  return (
    <section className='w-full flex flex-col md:flex-row gap-3 h-screen overflow-hidden overflow-y-auto scroll-container'>
      {/* PropertyCards */}
      <section className='w-full flex flex-col gap-3 overflow-hidden overflow-y-auto scroll-container h-screen'>
        {/* filter section */}
        <section className='flex gap-4 items-center justify-end mr-1'>
          <select value={filter} onChange={(e) => handleFilterChange(e, 'filter')} className='custom-select'>
            <option value="">All Properties</option>
            <option value="Apartment">Apartments</option>
            <option value="Commercial">Commercials</option>
          </select>

          <select value={status} onChange={(e) => handleFilterChange(e, 'status')} className='custom-select'>
            <option value="">All</option>
            <option value="Available">Available</option>
            <option value="Rented">Rented</option>
          </select>
        </section>

        <h4 className='font-semibold'>Showing {properties.length} Properties out of {propertiesData.length}</h4>

        {/* Show Properties */}
        <PropertyCards properties={properties} setLocation={setLocation} />
      </section>

      {/* Location */}
      <section id='map' className='w-full'>
        <Map location={location} />
      </section>
    </section>
  )
};

export default Properties;