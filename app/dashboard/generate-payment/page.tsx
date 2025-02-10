'use client';
import Button from '@/components/Button';
import React from 'react';
import { useRouter } from 'next-nprogress-bar';
import Wrapper from '@/components/HOC/Wrapper';

const GeneratePayment = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <>
        <form action=''>
          <div className='p-7 shadow rounded-lg pb-20 mb-10'>
            <div className='mt-5'>
              <p className='pb-1'>Payment link title</p>
              <input type='text' className='focus:outline-none w-full shadow p-4 rounded-md' />
            </div>
            <div className='mt-5'>
              <p className='pb-1'>Amount (in satoshi)</p>
              <input
                type='text'
                placeholder='500'
                className='focus:outline-none w-full shadow p-4 rounded-md'
              />
            </div>
            <div className='mt-5'>
              <p className='pb-1'>Description</p>
              <textarea
                rows={5}
                cols={50}
                placeholder='this is a payment link for receiving payments'
                className='focus:outline-none w-full shadow p-4 rounded-lg resize-none'
              />
            </div>
          </div>
        </form>
        <Button
          onClick={() => router.push('/dashboard/generate-payment/link')}
          content='Generate Link'
        />
      </>
    </Wrapper>
  );
};

export default GeneratePayment;
