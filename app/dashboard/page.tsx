'use client';
import React from 'react';
import Image01 from '@/assets/image/bitcoin.png';
import Image02 from '@/assets/image/Wallet.png';
import Image03 from '@/assets/image/QR-code.png';
import { BiWallet } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import DashBalance from '@/components/DashBalance';
import Transaction from '@/components/Transaction';
import Image from 'next/image';
import Wrapper from '@/components/HOC/Wrapper';
import { useRouter } from 'next-nprogress-bar';

const Dashboard = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <>
        <DashBalance />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
          <div
            className='bg-[#E5FDE3] pt-5 px-6 rounded-2xl cursor-pointer'
            onClick={() => router.push('/dashboard/bitcoin-airtime')}
          >
            <p className='text-green font-bold text-lg md:text-xl'>
              Bitcoin to <br />
              Airtime
            </p>
            <div className='flex justify-end w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto md:mx-0'>
              <Image
                src={Image01}
                alt='Bitcoin to Airtime'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div
            className='bg-[#E3F2FD] pt-5 px-6 rounded-2xl cursor-pointer'
            onClick={() => router.push('/dashboard/virtual-card')}
          >
            <p className='text-[#0099FF] font-bold text-lg md:text-xl'>
              Virtual
              <br />
              Cards
            </p>
            <div className='flex justify-end w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto md:mx-0'>
              <Image src={Image02} alt='Virtual Cards' className='w-full h-full object-cover' />
            </div>
          </div>
          <div
            className='bg-[#FEEAF3] pt-5 px-6 rounded-2xl cursor-pointer'
            onClick={() => router.push('/dashboard/generate-payment')}
          >
            <p className='text-[#F975B8] font-bold text-lg md:text-xl'>
              Generate <br />
              Links
            </p>
            <div className='flex justify-end w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto md:mx-0'>
              <Image src={Image03} alt='Generate Links' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>

        <div>
          <p className='text-base md:text-lg font-medium mb-3'>Recent Transactions</p>
          <div className='flex flex-col gap-3'>
            <Transaction
              icon={<BiWallet className='text-xl md:text-2xl lg:text-3xl text-white' />}
              color='green'
              title='Wallet funded!'
              amount='$ 40'
            />
            <Transaction
              icon={<FiSend className='text-xl md:text-2xl lg:text-3xl text-white' />}
              color='pink'
              title='Transfer successful!'
              amount='-$ 30'
            />
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default Dashboard;
