import { FC } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Field } from "@/components/ui/field"
import { Button, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { Link } from 'wouter';
import { PATHS } from '@/global';

const SignInForm: FC = () => {
  return (
    <Stack gap={4} w="full" maxW="xl">
      <Heading fontSize={'2xl'}>Sign in to your account</Heading>
      <Field id="email" label="Email address">
        <Input type="email" />
      </Field>
      <Field id="password" label="Password">
        <Input type="password" />
      </Field>
      <Stack gap={6}>
        <Checkbox>Remember me</Checkbox>
        <Button colorPalette="teal" variant="solid">
          Sign in
        </Button>
        <Text textAlign="center">
          Do not have an account?{' '}
          <Text color="teal" asChild>
            <Link to={PATHS.SIGN_UP}>Register here</Link>
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

export default SignInForm;