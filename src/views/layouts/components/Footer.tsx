import { FC } from 'react';
import { Box, Container, HStack, IconButton, Text, Flex, Image, Link } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import CodeslatorLogo from '@/assets/codeslator_logo.svg';
import { environment } from '@/global';


const Footer: FC = () => {
  return (
    <Container as="footer" fluid py={4} bg="gray.900" mt={10}>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems={{ base: 'center', md: 'center' }}
        gap={6}
      >
        <a href={environment.GITHUB_REPO_URL}>
          <Flex align="center">
            <Image src={CodeslatorLogo} alt="Codeslator logo" height="2.5rem" />
            <Text textStyle="xl" ml={2} fontWeight="bold">Shopping Cart App</Text>
          </Flex>
        </a>
        <Text>
          © {new Date().getFullYear()}{' '}
          <Link variant="plain" colorPalette="teal" href={environment.CODESLATOR_URL} target="_blank">CodeslatorDev</Link>. All rights reserved
        </Text>
        <HStack>
          <IconButton colorPalette="teal" variant="outline" aria-label="Facebook" asChild>
            <a href="https://www.facebook.com/codeslator" target="_blank">
              <FaFacebook />
            </a>
          </IconButton>
          <IconButton colorPalette="teal" variant="outline" aria-label="Instagram" asChild>
            <a href="https://www.instagram.com/codeslator" target="_blank">
              <FaInstagram />
            </a>
          </IconButton>
          <IconButton colorPalette="teal" variant="outline" aria-label="LinkedIn">
            <a href="https://www.linkedin.com/in/andres-melendez-dev" target="_blank">
              <FaLinkedin />
            </a>
          </IconButton>
          <IconButton colorPalette="teal" variant="outline" aria-label="GitHub">
            <a href="https://github.com/codeslator" target="_blank">
              <FaGithub />
            </a>
          </IconButton>
        </HStack>
      </Box>
    </Container>
  );
};

export default Footer;