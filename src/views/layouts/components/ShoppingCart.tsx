import { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { MdAddShoppingCart } from "react-icons/md";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ShoppingCart: FC = () => {
  return (
    <DrawerRoot placement="end" size="xs">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton
          size="md"
          aria-label="Open Menu"
          variant="outline"
          colorPalette="green"
          mr={4}
        >
          <MdAddShoppingCart />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
        </DrawerHeader>
        <DrawerBody as="nav">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ShoppingCart;