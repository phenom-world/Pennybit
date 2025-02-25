import React from 'react';
import Image01 from '@/assets/image/play.png';
import Image from 'next/image';
import Wrapper from '@/components/HOC/Wrapper';

const Play = () => {
  return (
    <Wrapper>
      <>
        <div className='relative flex justify-center items-center'>
          <Image src={Image01} alt='' />
          <p className='absolute top-[20%] right-[20%] bg-pink text-white text-xl py-1 px-5 rounded-full'>
            Coming soon
          </p>
        </div>
        <p className='text-center text-2xl'>
          Play fun games with friends on Pennybit. <br />
          Top the scoreboard and get rewarded
          <br /> with Crypto
        </p>
      </>
    </Wrapper>
  );
};

export default Play;
