'use client';
import ConfirmOTP from '@/components/ConfirmOtp';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

const ConfirmEmail = () => {
  const router = useRouter();
  return (
    <ConfirmOTP
      title={'Confirm your email address'}
      onClick={() => router.push('/reset-password')}
    />
  );
};

export default ConfirmEmail;
