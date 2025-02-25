'use client';
import React from 'react';
import Image01 from '@/assets/image/profile.png';
import { Formik } from 'formik';
import Image from 'next/image';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import Wrapper from '@/components/HOC/Wrapper';

const Account = () => {
  return (
    <Wrapper>
      <>
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-light-orange rounded-full p-2'>
            <Image src={Image01} alt='' className='w-[50px] h-[50px] object-cover' />
          </div>
          <p className='text-2xl font-semibold'>Wakeel Kehinde</p>
          <p className='text-sm'>@wakeel</p>
        </div>

        <div className='mt-6'>
          <p className='text-sm bg-[#FAFAFA] p-5 rounded'>Personal Information</p>
          <Formik
            onSubmit={() => undefined}
            initialValues={{}}
            enableReinitialize
            validationSchema={''}
          >
            {() => (
              <>
                <div className='grid grid-cols-2 gap-5'>
                  <InputField label='First Name' placeholder='Wakeel' name='firstName' />
                  <InputField label='Last Name' placeholder='Kehinde' name='lastName' />
                </div>

                <InputField label='Email Address' placeholder='tijjken@gmail.com' name='email' />
                <InputField label='Phone Number' placeholder='2348121172330' name='phone' />
                <Button content={'Update'} />
              </>
            )}
          </Formik>
        </div>
      </>
    </Wrapper>
  );
};

export default Account;
