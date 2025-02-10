'use client';
import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Converter from '../Converter';
import { useSidebar } from '@/context/SidebarContext';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <div className='flex md:flex-row flex-col min-h-screen relative'>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden'
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed md:static h-full z-30 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row flex-1'>
        <div className='w-full md:w-[70%] bg-[#fff] p-4 md:!p-[54px] overflow-auto'>
          <Navbar />
          {children}
        </div>
        <div className='w-full md:w-[30%] bg-[#f5f5f5] p-4 md:!py-[81px] md:!px-[37px] overflow-auto'>
          <Converter />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
