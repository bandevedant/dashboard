"use client";
import { FaCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";

import Image from "next/image";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo and Subtitle */}
      <div className="flex items-center space-x-2">
        <div className="relative w-36 h-11">
          <Image
            src="/dengo.png"
            alt="Dengo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span className="text-sm font-light text-gray-500">
          <span className="text-sm font-light text-gray-500">for </span>
          <span className="text-sm font-light text-gray-500">residential</span>
        </span>
      </div>

      {/* Right Section: Active Status, Help Icon, Profile */}
      <div className="flex items-center space-x-4">
        {/* Active Status */}
        <div className="hidden md:flex flex-row items-center p-2 gap-2 w-20 h-8 bg-gray-200 rounded-full">
          <FaCircle className="text-green-500" size={8} />
          <span className="text-sm font-medium text-black">Active</span>
        </div>

        {/* Help Icon */}
        <div className="hidden md:flex flex-row items-center p-2 gap-1 w-16 h-8 bg-gray-200 rounded-full">
          <IoIosHelpCircle className="text-black-600" size={24} />
          <span className="text-sm font-medium text-black">Help</span>
        </div>

        {/* Hamburger Menu Icon for mobile */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <FiMenu className="text-gray-600" size={24} />
        </button>

        {/* Profile Icon for desktop */}
        <div className="hidden md:flex w-8 h-8 bg-black rounded-full items-center justify-center text-sm text-white">
          CV
        </div>
      </div>
    </header>
  );
};

export default Header;
