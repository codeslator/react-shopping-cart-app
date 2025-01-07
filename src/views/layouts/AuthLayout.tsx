import { FC, ReactNode } from 'react';
import { Flex, Stack, Image  } from '@chakra-ui/react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align="center" justify="center">
        {children}
      </Flex>
      <Flex flex={1} display={{ base: "none", md: "flex" }}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
};

export default AuthLayout;