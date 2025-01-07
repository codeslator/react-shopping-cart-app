import { FC } from 'react';
import { AuthLayout } from '@/views/layouts';
import { SignInForm } from './components';

const SignInPage: FC = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;