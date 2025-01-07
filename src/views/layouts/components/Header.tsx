import { FC, useState } from 'react';
import { Link } from "wouter";
import {
  Box,
  Flex,
  HStack,
  Container,
  Image
} from '@chakra-ui/react'
import {
  Button,
} from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Avatar } from "@/components/ui/avatar";
import ShoppingCart from './ShoppingCart';
import CodeslatorLogo from '@/assets/codeslator_logo.svg';
import { environment, ROUTES } from '@/global';

const links = [
  {
    label: 'Home',
    to: ROUTES.HOME
  },
]

const Header: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <Box as="header" bg="gray.900">
      <Container fluid>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack gap={8} alignItems="center">
            <a href={environment.CODESLATOR_URL} target="_blank">
              <Image src={CodeslatorLogo} alt="Codeslator logo" height="2.5rem" />
            </a>
            <HStack as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
              {links.map(({ label, to }) => (
                <Button variant="outline" colorPalette="teal" key={to} asChild>
                  <Link href={to}>{label}</Link>
                </Button>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <ShoppingCart />
            {isAuthenticated ? (
              <MenuRoot positioning={{ placement: "bottom-end" }}>
                <MenuTrigger>
                  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" cursor="pointer" />
                </MenuTrigger>
                <MenuContent>
                  {links.map(({ label, to }) => (
                    <MenuItem value={label} key={to} cursor="pointer">{label}</MenuItem>
                  ))}
                </MenuContent>
              </MenuRoot>
            ) : (
              <HStack gap={2}>
                <Button variant="solid" colorPalette="teal" asChild>
                  <Link href={ROUTES.SIGN_IN}>Sign Up</Link>
                </Button>
                <Button variant="outline" colorPalette="teal" asChild>
                  <Link href={ROUTES.SIGN_UP}>Sign Up</Link>
                </Button>
              </HStack>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;