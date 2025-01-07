import { FC } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Field } from "@/components/ui/field"
import { Button, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { Link } from "wouter";
import { PATHS } from '@/global';

const SignUpForm: FC = () => {
  return (
    <Stack gap={4} w="full" maxW="xl">
      <Heading fontSize={'2xl'}>Sign up to get your account</Heading>
      <HStack>
        <Field id="firstName" label="First Name">
          <Input type="text" />
        </Field>
        <Field id="lastName" label="Last Name">
          <Input type="text" />
        </Field>
      </HStack>
      <Field id="email" label="Email address">
        <Input type="email" />
      </Field>
      <Field id="password" label="Password">
        <Input type="password" />
      </Field>
      <Stack gap={6} align="space-between">
        <Checkbox>Remember me</Checkbox>
        <Button colorPalette="teal" variant="solid">
          Sign in
        </Button>
        <Text textAlign="center">
          Already a user?{' '}
          <Text color="teal" asChild>
            <Link to={PATHS.SIGN_IN}>Login</Link>
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

export default SignUpForm;