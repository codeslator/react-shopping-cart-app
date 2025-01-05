import { Box, Button, Heading, Text,  } from '@chakra-ui/react';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <Box textAlign="center" alignContent="center" py={10} px={6} height="100vh">
      <Heading
        display="inline-block"
        as="h2"
        size="6xl"
        color="orange"
        fontWeight="bold"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button
        colorPalette="orange"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;