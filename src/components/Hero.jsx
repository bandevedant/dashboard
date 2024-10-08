"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import Popup from "@/components/Popup"

const BillingPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const [paymentMethod, setPaymentMethod] = useState({
    type: "Credit card",
    maskedNumber: "****7019",
    expiry: "October 2026",
  });

  return (
    <div className="bg-gray-100  lg-w-full ">
      <div className="w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 mt-3">Billing</h2>

        <div className="mb-6">
          <h3 className="text-lg font-medium">Billing Type</h3>
          <p className="text-gray-700">Pay per Trip</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium">Payment Method(s)</h3>
          <div className="flex items-center justify-between p-4 rounded-lg">
            <div className="flex items-center">
              <div className="relative w-[26.32px] h-[19.09px] flex-none order-0 mr-3 flex-grow-0">
                <Image
                  src="/Frame 25.png" // Update with the actual path to your image
                  alt="Credit Card Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <p className="text-sm">
                  {paymentMethod.type} {paymentMethod.maskedNumber}
                </p>
                <p className="text-xs text-gray-600">{paymentMethod.expiry}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-600 font-medium">Preferred</span>
              <FaEdit
                className="text-gray-600 cursor-pointer"
                onClick={togglePopup}
              />
            </div>
            <Popup isOpen={isPopupOpen} onClose={togglePopup} />
          </div>
          <div className="border h-2  bg-gray-100"></div>
          <button className="mt-4 w-64 h-8 bg-gray-200 rounded-full text-black-600 font-medium shadow-md hover:shadow-lg ">
            + Add Payment Method
          </button>
        </div>

        <div className="mb-6 my-12">
          <h3 className="text-lg font-medium">Statements and Invoices</h3>
          <h2 className="my-4">Monthly statements received by users</h2>
          <div className="border h-2 bg-gray-100"></div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg text-center">
            <div className="relative w-[42px] h-[54px] flex-none order-0 flex-grow-0">
              <Image
                src="/Group 8.png"
                alt="Dengo"
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>

            <p className="text-xl text-black-500 mb-2">
              No statements available
            </p>
            <p className="text-black-600">
              A summary statement will be generated at the end of each month
            </p>
          </div>
        </div>
        <div className="border h-2 bg-gray-100 my-14"></div>
        <div>
          <h3 className="text-lg font-medium">Service Fees</h3>
          <div className="border h-2 bg-gray-100"></div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg text-center">
            <div className="relative w-[42px] h-[54px] flex-none order-0 flex-grow-0">
              <Image
                src="/Group 9.png"
                alt="Dengo"
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <p className="text-xl text-black-500 mb-2">
              No service fees charged
            </p>
            <p className="text-black-600">
              No service fees have been charged yet.
            </p>
          </div>
          <div className="border h-2 bg-gray-100 mt-14"></div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
