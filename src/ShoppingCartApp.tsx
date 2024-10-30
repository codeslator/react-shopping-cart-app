import {
  Box,
  Flex,
  HStack,
  IconButton,
  Container
} from '@chakra-ui/react'
import { MdAdd, MdMenu } from "react-icons/md";
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
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Links = ['Dashboard', 'Projects', 'Team']

function ShoppingCartApp() {

  return (
    <>
      <Box as="header" bg="gray.900">
        <Container fluid>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <DrawerRoot placement="start" size="xs">
              <DrawerBackdrop />
              <DrawerTrigger asChild>
                <IconButton
                  size={'md'}
                  aria-label={'Open Menu'}
                  display={{ md: 'none' }}
                >
                  <MdMenu />
                </IconButton>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerHeader>
                <DrawerBody as="nav">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <DrawerActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerActionTrigger>
                  <Button>Save</Button>
                </DrawerFooter>
                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>
            <HStack gap={8} alignItems={'center'}>
              <Box>Logo</Box>
              <HStack as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <Button size="xs" variant="ghost" colorPalette="blue" key={link} asChild>
                    <a href="#">{link}</a>
                  </Button>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Button
                variant={'solid'}
                colorPalette={'teal'}
                size={'sm'}
                mr={4}
              >
                <MdAdd /> Action
              </Button>
              <MenuRoot positioning={{ placement: "bottom-end" }}>
                <MenuTrigger>
                  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" cursor="pointer" />
                </MenuTrigger>
                <MenuContent>
                  {Links.map((link) => (
                    <MenuItem value={link} key={link} cursor="pointer">{link}</MenuItem>
                  ))}
                </MenuContent>
              </MenuRoot>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box as="main" p={4} h="100%">Hello world</Box>
    </>
  )
}

export default ShoppingCartApp
