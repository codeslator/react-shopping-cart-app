import { FC } from 'react';
import { AuthLayout } from '@/views/layouts';
import { SignUpForm } from './components';

const SignUpPage: FC = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;