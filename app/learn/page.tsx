
import Wrapper from '@/components/HOC/Wrapper';
import LearnBitcoin from '@/components/LearnBitcoin';
import React from 'react';

const Learn = () => {
  return (
    <Wrapper>
      <div className='flex flex-wrap justify-between gap-8'>
        <div className='w-[45%]'>
          <LearnBitcoin />
        </div>
        <div className='w-[45%]'>
          <LearnBitcoin />
        </div>
        <div className='w-[45%]'>
          <LearnBitcoin />
        </div>
        <div className='w-[45%]'>
          <LearnBitcoin />
        </div>
      </div>
    </Wrapper>
  );
};

export default Learn;
