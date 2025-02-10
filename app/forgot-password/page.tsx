'use client';
import React from 'react';
import { Formik } from 'formik';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import AuthScreen from '@/components/HOC/AuthScreen';
import { useRouter } from 'next-nprogress-bar';

const ForgotPassword = () => {
  const router = useRouter();
  return (
    <AuthScreen
      title={'Forgot Passowrd'}
      subtitle='Don’t worry, we got you!. Enter your email below'
    >
      <Formik
        onSubmit={() => undefined}
        initialValues={{}}
        enableReinitialize
        validationSchema={''}
      >
        {() => (
          <>
            <InputField
              label='Email Address'
              placeholder='What is your email address'
              name='email'
            />
            <Button content={'Recover Password'} onClick={() => router.push('/confirm-email')} />
          </>
        )}
      </Formik>
    </AuthScreen>
  );
};

export default ForgotPassword;
