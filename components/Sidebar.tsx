'use client';
import React, { useEffect, useState } from 'react';
import { MdDashboard, MdOndemandVideo, MdOutlineAccountCircle } from 'react-icons/md';
import { BiTransfer, BiLogOut, BiWallet } from 'react-icons/bi';
import { BsFillNodePlusFill } from 'react-icons/bs';
import Icon from './Icons';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { useSidebar } from '@/context/SidebarContext';

const Sidebar = () => {
  const [pathname, setPathname] = useState('dashboard');
  const router = useRouter();
  const { closeSidebar } = useSidebar();

  useEffect(() => {
    setPathname(window.location.pathname.split('/')[1]);
  }, []);

  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <div className='px-2 xl:px-10 w-[280px] md:w-full h-screen bg-[#f5f5f5] flex flex-col justify-between pb-10 sticky top-0'>
      <div>
        <div className='flex items-center cursor-pointer' onClick={() => router.push('/dashboard')}>
          <Icon height='25' width='30' id='logo-icon' />
          <p className='px-2 py-7 text-base text-orange font-semibold'>Pennybit</p>
        </div>

        <div className='w-full'>
          <Link href='/dashboard' onClick={handleLinkClick}>
            <div
              className={`flex items-center text-black text-lg mb-7 font-semibold px-5 cursor-pointer py-3 ${
                pathname === 'dashboard' &&
                'text-center rounded-lg flex-purple bg-orange !text-white'
              }`}
            >
              <MdDashboard className='text-3xl mr-7' />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link href='/wallet' onClick={handleLinkClick}>
            <div
              className={`flex items-center text-black text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                pathname === 'wallet' && 'text-center rounded-lg !text-white flex-purple bg-orange'
              }`}
            >
              <BiWallet className='text-3xl mr-7' />
              <p>Wallet</p>
            </div>
          </Link>
          <Link href='/exchange' onClick={handleLinkClick}>
            <div
              className={`flex items-center text-black text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                pathname === 'exchange' &&
                'text-center rounded-lg !text-white flex-purple bg-orange'
              }`}
            >
              <BiTransfer className='text-3xl mr-7' />
              <p>Exchange</p>
            </div>
          </Link>
          <Link href='/learn' onClick={handleLinkClick}>
            <div
              className={`flex items-center text-black text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                pathname === 'learn' && 'text-center rounded-lg !text-white flex-purple bg-orange'
              }`}
            >
              <MdOndemandVideo className='text-3xl mr-7' />
              <p>Learn</p>
            </div>
          </Link>
          <Link href='/play' onClick={handleLinkClick}>
            <div
              className={`flex items-center text-black text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                pathname === 'play' && 'text-center rounded-lg !text-white flex-purple bg-orange'
              }`}
            >
              <BsFillNodePlusFill className='text-3xl mr-7' />
              <p>Play</p>
            </div>
          </Link>
          <Link href='/account' onClick={handleLinkClick}>
            <div
              className={`flex items-center text-black text-lg mb-7 font-semibold px-5 cursor-pointer py-3  ${
                pathname === 'account' && 'text-center rounded-lg !text-white flex-purple bg-orange'
              }`}
            >
              <MdOutlineAccountCircle className='text-3xl mr-7' />
              <p>Account</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex items-center text-lg px-5 font-semibold cursor-pointer'>
        <BiLogOut className='text-3xl mr-7 text-black flex-purple' />
        <p className='text-black'>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
