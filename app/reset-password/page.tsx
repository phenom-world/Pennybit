'use client';
import React, { useState } from 'react';
import { Formik } from 'formik';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import AuthScreen from '@/components/HOC/AuthScreen';

const NewPassword = () => {
  const [password, setPassword] = useState(true);
  return (
    <AuthScreen title={'Reset Password'} subtitle={'You may proceed to reset your password here!'}>
      <Formik
        onSubmit={() => undefined}
        initialValues={{}}
        enableReinitialize
        validationSchema={''}
      >
        {() => (
          <>
            <InputField
              label='New Password'
              isPassword
              password={password}
              setPassword={setPassword}
              name='password'
              placeholder='Password'
            />{' '}
            <InputField
              label='Confirm New Password'
              isPassword
              password={password}
              setPassword={setPassword}
              name='password'
              placeholder='Confirm Password'
            />
            <Button content={'Change Password'} />
          </>
        )}
      </Formik>
    </AuthScreen>
  );
};

export default NewPassword;
