'use client';
import React from 'react';

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Success!</h3>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
