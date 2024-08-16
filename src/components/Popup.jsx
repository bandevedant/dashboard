"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-4 rounded-lg flex flex-col h-[85vh] max-h-[80vh]">
        <div className="flex justify-between items-center pb-3 border-b">
          <h2 className="text-lg font-bold">Edit Card</h2>
          <button onClick={onClose} className="text-gray-600 text-lg">
            <FaTimes />
          </button>
        </div>
        <form className="flex flex-col flex-1 space-y-4 overflow-y-auto">
          <div>
            <label className="block text-xs font-medium">Card Number</label>
            <input
              type="text"
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="block text-xs font-medium">Exp. Date</label>
              <input
                type="text"
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium">Security Code</label>
              <input
                type="text"
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium">Country</label>
            <input
              type="text"
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Nickname (optional)</label>
            <input
              type="text"
              className="mt-1 block w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-row gap-2 items-center space-y-1 mt-auto">
            <button
              type="submit"
                  className="w-full py-2 h-[7vh] bg-blue-500 rounded-md text-gray-100 text-sm"
            >
              Save
            </button>
            <button onClick={onClose} 
            className="w-full py-2 h-[7vh] bg-gray-200 rounded-md text-gray-600 text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
        <p className="mt-1 text-xs text-gray-500">
          This payment method will be charged when users order rides, meals, or other Uber products on your Uber for Business account.
        </p>
      </div>
    </div>
  );
};

export default Popup;
