import { FC, ReactNode } from 'react';
import { Flex, Stack, Image, Box, Button } from '@chakra-ui/react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {

  const goBack = () => {
    history.back();
  }

  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Box position="absolute" top="4" left="4">
        <Button colorPalette="orange" variant="outline" onClick={goBack}>
          Go Back
        </Button>
      </Box>
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