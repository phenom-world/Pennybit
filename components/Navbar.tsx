import React from "react";
import Image01 from "@/assets/image/profile.png";
import { MdNotifications } from "react-icons/md";
import Image from "next/image";
import { useSidebar } from '@/context/SidebarContext';
import { HiMenuAlt2 } from 'react-icons/hi';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex justify-between items-center mb-6">
      <button 
        onClick={toggleSidebar}
        className='md:hidden text-2xl p-2 -ml-2 hover:bg-gray-100 rounded-lg'
        aria-label='Toggle Menu'
      >
        <HiMenuAlt2 />
      </button>
      <div className="flex justify-center items-center gap-2 md:gap-3">
        <div className="bg-light-orange rounded-full p-1.5 md:p-2">
          <Image
            src={Image01}
            alt=""
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover"
          />
        </div>
        <div>
          <p className="text-xl md:text-3xl font-bold">Hey Wakeel</p>
          <p className="text-sm md:text-base">you&apos;re a cool kid!</p>
        </div>
      </div>
      <MdNotifications className="text-2xl md:text-3xl mr-1 md:mr-2" />
    </div>
  );
};

export default Navbar;
