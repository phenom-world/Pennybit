
import ExchangeBoard from '@/components/ExchangeBoard';
import ExchangeDetail from '@/components/ExchangeDetail';
import Wrapper from '@/components/HOC/Wrapper';
import React from 'react';

const Exchange = () => {
  return (
    <Wrapper>
      <>
        <ExchangeBoard />
        <div className='pt-[43px]'>
          <div className='flex justify-between items-center'>
            <p className='w-[40%]'>Name</p>
            <p className='w-[20%] text-center'>Price</p>
            <p className='w-[20%] text-center'>Change</p>
            <p className='w-[20%] text-center'>Chart</p>
          </div>
          <ExchangeDetail title='Bitcoin BTC' />
          <ExchangeDetail title='Tether USDT' />
          <ExchangeDetail title='Naira NGNT' />
          <ExchangeDetail title='Bitcoin Cash BCH' />
        </div>
      </>
    </Wrapper>
  );
};

export default Exchange;
