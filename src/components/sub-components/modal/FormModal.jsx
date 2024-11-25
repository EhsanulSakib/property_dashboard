'use client';
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import SuccessModal from './SuccessModal';

const FormModal = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    propertyType: '',
    price: '',
    rent: '',
    address: '',
    apartmentSize: '',
    location: '',
    locationMap: '',
  });

  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.propertyType.trim()) newErrors.propertyType = 'Property type is required.';
    if (!formData.price || isNaN(formData.price) || formData.price <= 0)
      newErrors.price = 'Price must be a positive number.';
    if (!formData.rent) newErrors.rent = 'Rent status is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.apartmentSize || isNaN(formData.apartmentSize) || formData.apartmentSize <= 0)
      newErrors.apartmentSize = 'Apartment size must be a positive number.';
    if (!formData.location.trim()) newErrors.location = 'Location is required.';
    if (!formData.locationMap.trim() || !formData.locationMap.startsWith('http'))
      newErrors.locationMap = 'Valid Google Map URL is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    setIsSuccessModalOpen(true); // Open success modal on successful submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error for the field on change
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setIsOpen(false); // Close main form modal as well
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 px-8 w-full max-w-lg">
        <div className='flex justify-end'>
          <h2 onClick={closeModal} className='text-4xl cursor-pointer'>
            <IoMdClose />
          </h2>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Property</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
              Property Type <span className="text-red-500">*</span>
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${errors.propertyType ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                }`}
            >
              <option value="">All Properties</option>
              <option value="Apartment">Apartment</option>
              <option value="Commercial">Commercial</option>
            </select>
            {errors.propertyType && (
              <p className="mt-1 text-sm text-red-600">{errors.propertyType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${errors.price ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                }`}
              placeholder="Enter price in BDT"
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rent Status <span className="text-red-500">*</span>
            </label>
            <select
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${errors.rent ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                }`}
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
            </select>
            {errors.rent && <p className="text-red-500 text-sm mt-1">{errors.rent}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${errors.address ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                }`}
              placeholder="Enter property address"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apartment Size (sqft) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="apartmentSize"
              value={formData.apartmentSize}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${errors.apartmentSize ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                }`}
              placeholder="e.g., 1200"
            />
            {errors.apartmentSize && (
              <p className="text-red-500 text-sm mt-1">{errors.apartmentSize}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${errors.location ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                }`}
              placeholder="Enter city or area"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Google Map Link <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="locationMap"
              value={formData.locationMap}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${errors.locationMap ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'
                }`}
              placeholder="Enter map URL"
            />
            {errors.locationMap && (
              <p className="text-red-500 text-sm mt-1">{errors.locationMap}</p>
            )}
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {isSuccessModalOpen && (
        <SuccessModal
          message="Your property has been successfully added."
          onClose={closeSuccessModal}
        />
      )}
    </div>
  );
};

export default FormModal;
