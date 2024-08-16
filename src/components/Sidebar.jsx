'use client'
import Link from 'next/link';
import {FiPieChart, FiActivity, FiUsers, FiCreditCard, FiShoppingCart, FiLogOut ,  FiHelpCircle } from 
// import { FiHome, FiPieChart, FiActivity, FiUsers, FiCreditCard, FiShoppingCart, FiLogOut ,  FiHelpCircle } from 
'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import { IoMdHome ,IoMdFolder} from "react-icons/io";
import { RiBarChartBoxFill} from "react-icons/ri";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Home', icon: <IoMdHome />, link: '/' },
    { name: 'Program', icon: <IoMdFolder />, link: '/program' },
    { name: 'Insights', icon: <RiBarChartBoxFill />, link: '/insights' },
    { name: 'Activity', icon: <BsCalendarEventFill />, link: '/activity' },
    { name: 'People', icon: <FaPeopleGroup />, link: '/people' },
    { name: 'Billing', icon: <FaCreditCard />, link: '/billing' },
    { name: 'Marketplace', icon: <IoBagHandleSharp />, link: '/marketplace' },
    { name: 'Log out', icon: <FiLogOut />, link: '/logout' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 w-full md:w-64 h-full bg-gray-50  transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end md:hidden p-4">
        <button onClick={toggleSidebar} className="text-gray-600 text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.link}>
            <div
              className="flex items-center space-x-2 p-2 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
      
      <div className="md:hidden mt-auto p-4">
        <div className="flex items-center justify-between text-sm">
          <button className="flex items-center space-x-1 text-gray-600">
            <FiHelpCircle />
            <span>Help</span>
          </button>
          <div className="flex items-center space-x-1">
            <FaCircle className="text-green-500" size={8} />
            <span className="text-gray-700">Active</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center md:justify-start">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm text-gray-600">
            CV
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
